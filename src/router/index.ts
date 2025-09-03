import Taro from "@tarojs/taro";

type Params = Record<string, string | number | boolean | undefined | null>;

interface Router {
  push(url: string, params?: Params): void;
  replace(url: string, params?: Params): void;
  switchTab(url: string, params?: Params): void;
  reLaunch(url: string, params?: Params): void;
}

function buildQuery(params: Params): string {
  return Object.keys(params)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key] ?? "")}`
    )
    .join("&");
}

/**
 * Taro 应用的路由工具类。
 *
 * 提供页面跳转、重定向、切换 Tab、重启应用等方法，并支持可选的查询参数。
 *
 * @property navigateTo - 跳转到指定页面，可携带查询参数。
 * @property redirectTo - 重定向到指定页面，可携带查询参数。
 * @property switchTab - 切换到指定 Tab 页面，可携带查询参数。
 * @property reLaunch - 重启应用到指定页面，可携带查询参数。
 *
 * @example
 * router.navigateTo('/pages/home', { userId: 123 });
 */
const router: Router = {
  push(url, params) {
    if (params) {
      const query = buildQuery(params);
      Taro.navigateTo({ url: `${url}?${query}` });
    } else {
      Taro.navigateTo({ url });
    }
  },
  replace(url, params) {
    if (params) {
      const query = buildQuery(params);
      Taro.redirectTo({ url: `${url}?${query}` });
    } else {
      Taro.redirectTo({ url });
    }
  },
  switchTab(url, params) {
    if (params) {
      const query = buildQuery(params);
      Taro.switchTab({ url: `${url}?${query}` });
    } else {
      Taro.switchTab({ url });
    }
  },
  reLaunch(url, params) {
    if (params) {
      const query = buildQuery(params);
      Taro.reLaunch({ url: `${url}?${query}` });
    } else {
      Taro.reLaunch({ url });
    }
  },
};


export { router };
