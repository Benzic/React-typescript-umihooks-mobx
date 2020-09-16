/*
 * @Author: your name
 * @Date: 2020-09-16 14:52:59
 * @LastEditTime: 2020-09-16 14:53:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\utils\fn.ts
 */
const fn = {
    setLocalStorage(key: string, data: any) {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.log(error);
        }
    },
    getLocalStorage(key: string) {
        try {
            let data: any = localStorage.getItem(key)
            return JSON.parse(data)
        } catch (error) {
            return null
        }
    },
    removeAllLocalStorage() {
        try {
            localStorage.clear()
        } catch (error) {
            console.log(error);
        }
    },
    removeLocalStorage(key: string) {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.log(error);
        }
    },
    saveSessionStorage(key: string, data: any) {
        try {
            sessionStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.log(error);
        }
    },
    getSessionStorage(key: string) {
        try {
            let data: any = sessionStorage.getItem(key)
            return JSON.parse(data)
        } catch (error) {
            console.log(error);
        }
    },
    removeAllSessionStorage() {
        try {
            sessionStorage.clear()
        } catch (error) {
            console.log(error);
        }
    },
    removeSessionStorage(key: any) {
        try {
            sessionStorage.removeItem(key)
        } catch (error) {
            console.log(error);
        }
    },
    guid() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + S4() + S4())
    }
}
export default fn;