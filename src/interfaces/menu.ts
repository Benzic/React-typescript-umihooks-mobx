/*
 * @Author: your name
 * @Date: 2020-09-17 14:44:26
 * @LastEditTime: 2020-09-17 14:47:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\interfaces\menu.ts
 */
export interface stateProps {
    menuMode: "inline" | "horizontal" | "vertical" | "vertical-left" | "vertical-right" | undefined,
    list: testObj
}

type testObj = {
    test: string,
    otherKey: string
}