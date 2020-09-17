/*
 * @Author: your name
 * @Date: 2020-09-16 14:02:59
 * @LastEditTime: 2020-09-17 13:54:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-cli\src\router\routes.ts
 */
import LoginIndex from '@/views/Login'
import Index from '@/views/Index'
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
        exact: true,
        component: Index,
        requiresAuth: false,
    },
    {
        path: '/pages',
        component: HomeIndex,
        requiresAuth: true,
        children: [{
            path: '/pages/sub1',
            name: 'SubPages1',
            icon: AndroidOutlined,
            children: [{
                path: "/pages/sub1/page1",
                component: SubPages11,
                name: 'SubPage1',
                icon: AppleOutlined,
                meta: {
                    roles: ['admin']
                }
            },
            {
                path: "/pages/sub1/page2",
                component: SubPages12,
                name: 'SubPage2',
                icon: DingdingOutlined,
                meta: {
                    roles: ['ss']
                }
            }]
        }, {
            path: '/pages/sub2',
            name: 'SubPages2',
            icon: IeOutlined,
            children: [{
                path: "/pages/sub2/page1",
                component: SubPages21,
                name: 'SubPage1',
                icon: ChromeOutlined,
                meta: {
                    roles: ['admin']
                }
            },
            {
                path: "/pages/sub2/page2",
                component: SubPages22,
                name: 'SubPage2',
                icon: AppleOutlined,
                meta: {
                    roles: ['admin']
                }
            }]
        }, {
            path: '/pages/sub3',
            name: 'SubPages3',
            icon: GithubOutlined,
            children: [{
                path: "/pages/sub3/page1",
                component: SubPages31,
                name: 'SubPage1',
                icon: AlipayCircleOutlined,
                meta: {
                    roles: ['admin']
                }
            },
            {
                path: "/pages/sub3/page2",
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