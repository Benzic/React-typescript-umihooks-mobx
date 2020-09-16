/*
 * @Author: your name
 * @Date: 2020-09-16 19:30:24
 * @LastEditTime: 2020-09-16 19:46:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\interfaces\routes.ts
 */
import { ComponentClass, FunctionComponent } from 'react'  //route在React-router中有专门的interface 我这里只是来举个例子
export interface routeTypes {
    path: string,
    component?: ComponentClass | FunctionComponent,
    requiresAuth?: boolean,
    icon?: ComponentClass | FunctionComponent,
    name?: string,
    meta?: metaType,
    exact?: boolean,
    children?: routeTypes[]
}

export interface metaType {
    roles?: string[]
}