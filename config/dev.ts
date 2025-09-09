import type { UserConfigExport } from "@tarojs/cli";

export default {
  defineConstants: {
    // 开发环境 API 地址
    "process.env.TARO_APP_API_BASEURL": JSON.stringify(
      "https://jsonplaceholder.typicode.com"
    ),
  },
  logger: {
    quiet: false,
    stats: true,
  },
  env: {
    NODE_ENV: '"development"',
  },
  mini: {},
  h5: {
    publicPath: "/",
  },
} satisfies UserConfigExport<"webpack5">;
