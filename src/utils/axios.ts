/*
 * @Author: your name
 * @Date: 2020-09-16 19:21:01
 * @LastEditTime: 2020-09-17 15:12:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\utils\axios.ts
 */
import axios from 'axios'
let loading: HTMLElement | null = null
//创建axios实例
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API, // api的base_url
    timeout: 200000, // 请求超时时间
    withCredentials: true // 选项表明了是否是跨域请求
})
service.interceptors.request.use(config => {
    const flag = true
    if (flag) {
        loading = document.getElementById('ajax_loading')
        loading && (loading.style.display = 'block')
    }
    return config;
}, err => {
    console.log('请求失败')
    return Promise.reject(err)
})



//拦截响应
service.interceptors.response.use(config => {
    if (loading) {
        loading = document.getElementById('ajax_loading')
        loading && (loading.style.display = 'none')
        loading = null
    }
    return config;
}, err => {
    if (loading) {
        loading = document.getElementById('ajax_loading')
        loading && (loading.style.display = 'none')
        loading = null
    }
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
