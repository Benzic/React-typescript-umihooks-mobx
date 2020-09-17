/*
 * @Author: your name
 * @Date: 2020-09-16 18:53:08
 * @LastEditTime: 2020-09-17 15:07:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\stores\test\index.ts
 */
import { observable, action } from 'mobx'
import { fn } from '@/utils/fn'
export type loginStoreType = {
    userInfo: userInfoType | null,
    login: (loginInfo: userInfoType) => Promise<any>,
    loginout: () => void
};
interface userInfoType {
    username: string, password: string
}
class loginClass {
    @observable userInfo: userInfoType | null = null
    @action.bound
    login(loginInfo: userInfoType): Promise<any> {
        return new Promise((resolve, reject) => {
            fn.setLocalStorage("login", true)
            fn.setLocalStorage("userInfo", loginInfo)
            this.userInfo = loginInfo
            resolve(loginInfo)
        })
    }
    loginout = (): void => {
        fn.removeLocalStorage("login")
        fn.removeLocalStorage("userInfo")
        this.userInfo = null
    }
}
const loginStore: loginStoreType = new loginClass();
export default loginStore;