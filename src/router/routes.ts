/*
 * @Author: your name
 * @Date: 2020-09-16 14:02:59
 * @LastEditTime: 2020-09-16 19:33:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\router\routes.ts
 */
import LoginIndex from '@/views/Login'
import HomeIndex from '@/views/Home'
import SubPages11 from '@/views/SubPages1/Page1'
import SubPages12 from '@/views/SubPages1/Page2'
import SubPages21 from '@/views/SubPages2/Page1'
import SubPages22 from '@/views/SubPages2/Page2'
import SubPages31 from '@/views/SubPages3/Page1'
import SubPages32 from '@/views/SubPages3/Page2'
import NotFound from '@/views/NotFound'
import { AndroidOutlined, AppleOutlined, DingdingOutlined, IeOutlined, ChromeOutlined, GithubOutlined, AlipayCircleOutlined, ZhihuOutlined } from '@ant-design/icons'
import { routeTypes } from '@/interfaces/routes'
const routes: routeTypes[] = [
    {
        path: '/',
        component: HomeIndex,
        requiresAuth: true,
        children: [{
            path: '/subPages1',
            name: 'SubPages1',
            icon: AndroidOutlined,
            children: [{
                path: "/subPages1/page1",
                component: SubPages11,
                name: 'SubPage1',
                icon: AppleOutlined,
                meta: {
                    roles: ['admin']
                }
            },
            {
                path: "/subPages1/page2",
                component: SubPages12,
                name: 'SubPage2',
                icon: DingdingOutlined,
                meta: {
                    roles: ['ss']
                }
            }]
        }, {
            path: '/subPage2',
            name: 'SubPages2',
            icon: IeOutlined,
            children: [{
                path: "/subPages2/page1",
                component: SubPages21,
                name: 'SubPage1',
                icon: ChromeOutlined,
                meta: {
                    roles: ['admin']
                }
            },
            {
                path: "/subPages2/page2",
                component: SubPages22,
                name: 'SubPage2',
                icon: AppleOutlined,
                meta: {
                    roles: ['admin']
                }
            }]
        }, {
            path: '/SubPages3',
            name: 'SubPages3',
            icon: GithubOutlined,
            children: [{
                path: "/subPages3/page1",
                component: SubPages31,
                name: 'SubPage1',
                icon: AlipayCircleOutlined,
                meta: {
                    roles: ['admin']
                }
            },
            {
                path: "/subPages3/page2",
                component: SubPages32,
                name: 'SubPage2',
                icon: ZhihuOutlined,
                meta: {
                    roles: ['admin']
                }
            }]
        },]
    },
    {
        path: '/login',
        component: LoginIndex,
        requiresAuth: false,
    },
    {
        path: '*',
        exact: true,
        component: NotFound,
        requiresAuth: false,
    }
]

export default routes