export default defineAppConfig({
  pages: [
    'pages/index/index', 
    'pages/my/my',
    'pages/test/test',
  ],
  tabBar: {
    custom: true,
    list: [
      { pagePath: 'pages/index/index', text: '首页' },
      { pagePath: 'pages/test/test', text: '测试' },
      { pagePath: 'pages/my/my', text: '我的' },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
