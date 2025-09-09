import { validator } from "./utils";
import type { demoT } from "./modules/demo";

// 所有接口类型, 需要在modules下的ts文件中导出, 在ApiType上添加合并 type ApiType = demoT & xxx
// 在vue文件中使用时具有提示作用
type ApiType = demoT;
const map = {};
const isDev = process.env.NODE_ENV === "development";

const generators = (modules = require.context("./modules", true, /\.ts$/)) => {
  return modules.keys().map((key) => {
    return modules(key)?.default;
  });
};

generators().forEach((generator) => {
  for (const key in generator) {
    isDev && validator(key);
    if (!Object.prototype.hasOwnProperty.call(key, map)) {
      map[key] = generator[key];
    } else {
      isDev && console.error(new Error(`API modules模块下 ${key} 接口名重复`));
      continue;
    }
  }
});

export function useRequest() {
  return map as ApiType;
}

export default map as ApiType;
