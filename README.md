# taro-template-vue

基于Taro4、Vue3、TypeScript、Webpack5、Tailwind4、NutUI打造的一款专注于Taro多端开发的简单模板

## 特色

- 🛠️ [Taro4](https://docs.taro.zone/docs/), [Vue 3](https://github.com/vuejs/core), [Webpack5](https://webpack.js.org/), [pnpm10](https://pnpm.io/)

- 💪 [TypeScript](https://github.com/microsoft/TypeScript) 全新类型系统支持

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🎨 [Tailwindcss4](https://tailwindcss.com/) - 目前**最**流行的原子化 `CSS` 框架，用于快速UI开发

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🚀 [NutUI-Vue](https://nutui.jd.com/h5/vue/4x/#/zh-CN/guide/intro) - 无需引入直接使用高质量组件，覆盖移动端主流场景

- 🌍 [API 采用模块化导入方式](https://blog.csdn.net/qq_43775179/article/details/134811292) 根据demo.js文件设置接口，以API_xxx_method的方式命名，在请求时无需导入 直接使用useRequest()函数返回参数以解构的方式获取，拿到即为写入的接口

## 平台兼容性

| H5  | IOS | 安卓 | 微信小程序 | 字节小程序 | 快手小程序 | 支付宝小程序 | 钉钉小程序 | 百度小程序 |
| --- | --- | ---- | ---------- | ---------- | ---------- | ------------ | ---------- | ---------- |
| √   |     |      |      √     |           |           |             |           |          |

## 环境

>vscode `v1.103.2`
>node    `v22.14.0`
>taro `v4.1.5`
>pnpm     `v10.11.0`

## 🍭 安装使用

🍙 获取项目代码

```bash
git clone https://github.com/gitboyzcf/uni-preset-vue3-vite.git
```

🌈 安装依赖

```bash
pnpm install
```

🐥 运行

```bash
pnpm dev:weapp
pnpm dev:h5
```

🍁 打包

```bash
pnpm build:weapp
pnpm build:h5
```

🌯 Git 提交流程

```bash
git add .
git commit -m 'feat:xxx'
git pull origin main
git push origin main
```

## 🍣 Git 规范

参考 [Vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `✨ feat:xxx` 增加新功能
- `🐛 fix:xxx` 修复问题/BUG
- `🎉 init:xxx` 初始化
- `📝 docs:xxx` 文档变更
- `💄 style:xxx` 代码格式(不影响代码运行的变动)
- `♻️ refactor:xxx` 重构(既不是增加feature，也不是修复bug)
- `⚡️ perf:xxx` 性能优化
- `✅ test:xxx` 增加测试
- `⏪️ revert:xxx` 回退
- `🚀‍ build:xxx` 构建过程或辅助工具的变动
- `👷 ci:xxx` CI 配置

## 后续功能接入

🔳[taro-axios](https://github.com/fjc0k/taro-axios/tree/master)API 采用模块化导入方式
🔳上拉刷新、下拉加载
🔳子页面分包，跳转、拦截
🔳图片、视频、canvas、图表echarts
🔳地图
🔳......

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=template-space/taro-template-vue&type=Timeline)](https://star-history.com/#template-space/taro-template-vue&Timeline)
