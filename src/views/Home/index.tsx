import React, { useRef } from 'react'
import { usePersistFn } from 'ahooks'
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout } from 'antd';
import { hasPermission } from '@/utils/hasPermission'
import { routeTypes } from '@/interfaces/routes'
import Menu from '@/layout/Menu';
import Header from '@/layout/Header'
import Routes from '@/router/routes'
import NotFound from '@/views/NotFound'
import './index.less'
const { Content } = Layout;
const Home: React.FC<any> = ((props: RouteComponentProps): JSX.Element => {
    const loadFirstPage = useRef<boolean>(false)
    const getPermissionRoutes = usePersistFn((Routes: routeTypes[]): React.ReactNode => {
        const userRole: string[] = ['admin']
        return Routes.map((item: routeTypes, index: number) => {
            if (item.children && item.children.length > 0) {
                return getPermissionRoutes(item.children)
            } else {
                if (item?.meta?.roles) {
                    if (hasPermission(item?.meta?.roles, userRole)) {
                        if (!loadFirstPage.current) {
                            props.history.replace(item.path)
                            loadFirstPage.current = true
                        }
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
                            {getPermissionRoutes(Routes[1].children as routeTypes[])}
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </div>
})
export default withRouter(Home)