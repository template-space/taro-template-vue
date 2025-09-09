import Taro from '@tarojs/taro'
// 请求状态错误
export const httpLogError = (error, msg) => {
  error.message = msg
  Taro.showToast({
    title: msg,
    icon: 'error',
    duration: 2000
  })
}

// api请求错误
export const requestError = (response) => {
  return new Promise((resolve, reject) => {
    const { data } = response
    const msg = `api请求出错 ${response.config.url}：${data.message}`
    Taro.showToast({
      title: msg,
      icon: 'error',
      duration: 2000
    })
    reject(data)
  })
}

// 登录失效
export const throttleToLogin = () => {
  // uni.navigateTo({ url: '/pages/login/login' })
}


export const validator = (key) => {
  if (!key.startsWith('API_')) {
    console.warn(`api名称必须以API_为开头,${key} 应改为 API_${key}`)
  }
}