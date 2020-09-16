/*
 * @Author: your name
 * @Date: 2020-08-10 17:12:31
 * @LastEditTime: 2020-09-16 19:22:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \BigDataAP\src\api\api-aoi.ts
 */
import axios from '@/utils/axios';

// 公共变量
const config = '/test';
export function getTestApi(params?: any): Promise<any> {
    return axios({
        url: `${config}/api`,
        params
    });
}