/*
 * @Author: your name
 * @Date: 2020-09-16 19:21:01
 * @LastEditTime: 2020-09-16 19:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\utils\axios.ts
 */
import axios from 'axios'
//创建axios实例
const service = axios.create({
    baseURL: process.env.REQUSET_URL, // api的base_url
    timeout: 200000, // 请求超时时间
    withCredentials: true // 选项表明了是否是跨域请求
})
console.log(process.env)
service.interceptors.request.use(config => {
    const flag = (config.data && config.data.loading !== false) || (config.params && config.params.loading !== false)
    if (flag) {
        let loading: any
        loading = document.getElementById('ajax_loading')
        loading.style.display = 'block'
    }
    return config;
}, err => {
    console.log('请求失败')
    return Promise.reject(err)
})



//拦截响应
service.interceptors.response.use(config => {
    if (config.data && config.data.loading !== false) {
        let loading: any
        loading = document.getElementById('ajax_loading')
        loading.style.display = 'none'
    }
    return config;
}, err => {
    console.log('响应失败')
    return Promise.reject(err)
})



// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status !== 1) {
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export default service
