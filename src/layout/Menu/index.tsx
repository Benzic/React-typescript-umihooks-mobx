import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import { usePersistFn } from 'ahooks'
import { useImmer } from 'use-immer'
import { hasPermission } from '@/utils/hasPermission'
import { routeTypes } from '@/interfaces/routes'
import { stateProps } from '@/interfaces/menu'
import Routes from '@/router/routes'
import './index.less'
const { Sider } = Layout
const MenuDom: React.FC = ((): JSX.Element => {
    const [state, setState] = useImmer<stateProps>({
        menuMode: "inline",
        list: {
            test: "test",
            otherKey: "otherKey"
        }
    })
    const onChangeCollapse = usePersistFn((val: boolean): void => {
        setState(state => {
            state.menuMode = !val ? 'inline' : 'horizontal';
            state.list.test = 'test update'
        })
    })
    const getMenuItem = usePersistFn((item: routeTypes): React.ReactNode => {
        return <Menu.Item key={item.path}>
            <Link to={item.path}>
                <div>
                    {item.icon && React.createElement(item.icon)}
                    <span>{item.name}</span>
                </div>
            </Link>
        </Menu.Item>
    })
    const getMenuList = usePersistFn((routes: routeTypes[]): React.ReactNode => {
        const userRole: string[] = ['admin']
        return <Menu theme="dark" style={{ height: "100%" }} mode={state.menuMode} >
            {routes.map((item: routeTypes) => {
                if (item.children && item.children.length > 0) {
                    return (<Menu.SubMenu
                        key={item.path}
                        title={<div>
                            {item.icon && React.createElement(item.icon)}
                            <span>{item.name}</span>
                        </div>} >
                        {getMenuList(item.children)}
                    </Menu.SubMenu>)
                } else {
                    if (item?.meta) {
                        if (hasPermission(item.meta.roles as string[], userRole)) {
                            return getMenuItem(item)
                        } else {
                            return null
                        }
                    } else {
                        return getMenuItem(item)
                    }
                }
            })}
        </Menu>
    })
    return <div className="menu-wrapper">
        <Sider collapsible theme="light" onCollapse={onChangeCollapse}>
            <div className="logo" >LOGO</div>
            {getMenuList(Routes[1].children as routeTypes[])}
        </Sider>
    </div>
})
export default MenuDom