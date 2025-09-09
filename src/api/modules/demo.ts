/**
 * 命名=》API_xxx_methodName
 */

import { request } from '../request'
export type demoT = {
  API_DEMO_POST: (data?: object) => Promise<unknown>;
  API_DEMO_GET: (params?: object) => Promise<unknown>;
}
const demoApi: demoT = {
  API_DEMO_POST(data = {}) {
    return request({
      url: '/mock/user',
      method: 'post',
      data
    })
  },

  API_DEMO_GET(params = {}) {
    return request({
      url: '/posts',
      method: 'get',
      params,
    })
  }
}

export default demoApi
