import { defineConfig, type UserConfigExport } from "@tarojs/cli";
import { UnifiedWebpackPluginV5 } from "weapp-tailwindcss/webpack";
import ComponentsPlugin from "unplugin-vue-components/webpack";
import NutUIResolver from "@nutui/auto-import-resolver";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import devConfig from "./dev";
import prodConfig from "./prod";
import path from "path";


// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig<"webpack5">(async (merge, { command, mode }) => {
  const baseConfig: UserConfigExport<"webpack5"> = {
    projectName: "taro-template-vue",
    date: "2025-8-29",
    designWidth(input) {
      // 配置 NutUI 375 尺寸
      if (
        typeof input === "object" &&
        input !== null &&
        "file" in input &&
        typeof (input as any).file === "string" &&
        (input as any).file.replace(/\\+/g, "/").indexOf("@nutui") > -1
      ) {
        return 375;
      }
      // 全局使用 Taro 默认的 750 尺寸
      return 750;
    },
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
      375: 2 / 1,
    },
    sourceRoot: "src",
    outputRoot: `dist/${process.env.TARO_ENV}`,
    plugins: [
      "@tarojs/plugin-generator",
      "taro-plugin-pinia",
      [
        "@tarojs/plugin-html",
        {
          pxtransformBlackList: [/page|h5/],
        },
      ],
      [
        "@tarojs/plugin-framework-vue3",
        {
          vueLoaderOption: {
            compilerOptions: {
              isCustomElement: (tag) => tag.includes("ec-canvas"),
              whitespace: "preserve",
              // ...
            },
            reactivityTransform: true, // 开启vue3响应性语法糖
          },
        },
      ],
    ],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {},
    },
    alias: {
      // "@/components": path.resolve(__dirname, "..", "src/components"),
      // "@/utils": path.resolve(__dirname, "..", "src/utils"),
      // "@": path.resolve(__dirname, "..", "src"),
    },
    framework: "vue3",
    compiler: {
      type: "webpack5",
      prebundle: {
        enable: false, // 开启后导致小程序pinia丢失响应式
      },
    },
    cache: {
      enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    mini: {
      // 解决Error: chunk common [mini-css-extract-plugin]警告问题
      // https://github.com/NervJS/taro/issues/14034
      miniCssExtractPluginOption: {
        ignoreOrder: true,
      },
      prerender:
        mode !== "development"
          ? {
              match: "pages/**", // 添加页面预渲染，防止tabar出现闪烁
            }
          : {},
      postcss: {
        htmltransform: {
          enable: true,
          config: {
            removeCursorStyle: false,
          },
        },
        pxtransform: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: "module", // 转换模式，取值为 global/module
            generateScopedName: "[name]__[local]___[hash:base64:5]",
          },
        },
      },
      webpackChain(chain) {
        chain.resolve.plugin("tsconfig-paths").use(TsconfigPathsPlugin);
        chain.merge({
          plugin: {
            install: {
              plugin: UnifiedWebpackPluginV5,
              args: [
                {
                  // 这里可以传参数
                  rem2rpx: true,
                  tailwindcss: {
                    v4: {
                      cssEntries: [
                        // 你 @import "weapp-tailwindcss"; 那个文件绝对路径
                        path.resolve(__dirname, "../src/app.css"),
                      ],
                    },
                  },
                  // https://github.com/sonofmagic/weapp-tailwindcss/issues/155
                  injectAdditionalCssVarScope: true, // 解决nutui对tailwindcss的影响
                },
              ],
            },
          },
        });
        chain.plugin("unplugin-vue-components").use(
          ComponentsPlugin({
            resolvers: [NutUIResolver({ taro: true })],
          })
        );
      },
    } as any,
    h5: {
      staticDirectory: "static",
      output: {
        filename: "js/[name].[hash:8].js",
        chunkFilename: "js/[name].[chunkhash:8].js",
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[name].[chunkhash].css",
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: "module", // 转换模式，取值为 global/module
            generateScopedName: "[name]__[local]___[hash:base64:5]",
          },
        },
      },
      webpackChain(chain) {
        chain.resolve.plugin("tsconfig-paths").use(TsconfigPathsPlugin);
        chain.plugin("unplugin-vue-components").use(
          ComponentsPlugin({
            resolvers: [NutUIResolver({ taro: true })],
          })
        );
      },
    },
    rn: {
      appName: "taroDemo",
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        },
      },
    },
  };

  if (process.env.NODE_ENV === "development") {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig);
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig);
});
