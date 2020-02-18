import ValueUtils from "./utils/value";

export * from "./interface/com_model";
export * from "./message";
import * as msg from "./message";

export const valueUtils = ValueUtils;

/**
 * 暂停执行
 * @param ms 毫秒数
 */
export async function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// /**
//  * 常用函数
//  */
// export namespace Utils {
//     ValueUtils
// }
