// postcss 插件以 object 方式注册的话，是按照由上到下的顺序执行的
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}