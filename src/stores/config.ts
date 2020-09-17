/*
 * @Author: your name
 * @Date: 2020-09-16 18:53:26
 * @LastEditTime: 2020-09-17 11:10:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\stores\config.ts
 */
import counterStore from './test/index';
import loginStore from './login/index';
import breadcrumbStore from './breadCrumb/index'
export function createStore() {
  return {
    counterStore,
    loginStore,
    breadcrumbStore
  }
}

export const store = createStore();

export type TStore = ReturnType<typeof createStore>;
