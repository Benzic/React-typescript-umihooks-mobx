import React from 'react'
import { usePersistFn } from 'ahooks'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import Menu from '@/layout/Menu';
import Header from '@/layout/Header'
import Routes from '@/router/routes'
import { hasPermission } from '@/utils/hasPermission'
import NotFound from '@/views/NotFound'
import { routeTypes } from '@/interfaces/routes'
import './index.less'
const { Content } = Layout;
const Home: React.FC<{}> = ((): JSX.Element => {
    const getPermissionRoutes = usePersistFn((Routes) => {
        let userRole = ['admin']
        return Routes.map((item: routeTypes, index: number) => {
            if (item.children && item.children.length > 0) {
                return getPermissionRoutes(item.children)
            } else {
                if (item?.meta?.roles) {
                    if (hasPermission(item?.meta?.roles, userRole)) {
                        return <Route key={index} path={item.path} component={item.component} />
                    } else {
                        return null
                    }
                } else {
                    return <Route key={index} path={item.path} component={item.component} />
                }
            }
        })
    })
    return <div className="wrapper">
        <Layout className="layout">
            <div className="layout_Left">
                <Menu />
            </div>
            <Layout className="layout_right">
                <Header></Header>
                <Content className="wrapper_box">
                    <div className="wrapper_content">
                        <Switch>
                            {getPermissionRoutes(Routes[0].children)}
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </div>
})
export default Home