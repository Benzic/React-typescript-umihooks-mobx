/*
 * @Author: your name
 * @Date: 2020-09-17 11:06:35
 * @LastEditTime: 2020-09-17 14:55:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\stores\breadCrumb\index.ts
 */

import { observable, action } from 'mobx'
import { routeTypes } from '@/interfaces/routes'
export type breadcrumbStoreType = {
    breadData: routeTypes[],
    onChange: (val: routeTypes[]) => void
};
class breadcrumbStoreClass {
    @observable breadData: routeTypes[] = []

    @action.bound
    onChange(breadData: routeTypes[]): void {
        this.breadData = breadData
    }
}
const breadcrumbStore: breadcrumbStoreType = new breadcrumbStoreClass()
export default breadcrumbStore;