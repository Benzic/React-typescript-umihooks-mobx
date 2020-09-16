/*
 * @Author: your name
 * @Date: 2020-09-16 17:48:03
 * @LastEditTime: 2020-09-16 17:48:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\utils\hasPermission.ts
 */
export const hasPermission = (roles: string[], userRole: string[]): boolean => {
    if (!userRole) return false
    if (!roles) return true
    return userRole.some((role: string) => roles.includes(role))
}