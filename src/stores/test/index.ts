/*
 * @Author: your name
 * @Date: 2020-09-16 18:53:08
 * @LastEditTime: 2020-09-17 15:28:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\stores\test\index.ts
 */
import { observable, action } from 'mobx'
export type CountStoreType = {
    counter: number,
    onIncrement: () => void,
    onDecrement: () => void
};
// 观察者方式
class counterStoreClass {
    @observable counter: number = 0
    @action.bound
    onIncrement = (): void => {
        this.counter++;
    }
    onDecrement = (): void => {
        this.counter--;
    }
}
const counterStore: CountStoreType = new counterStoreClass();
export default counterStore;