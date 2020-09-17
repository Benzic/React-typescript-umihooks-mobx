import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { fn, each } from '@/utils/fn';
import { useStore } from '@/stores'
import { usePersistFn } from 'ahooks';
import { routeTypes } from '@/interfaces/routes'
import routesMap from '@router/routes'
const Routes: React.FC = () => {
    const { breadcrumbStore } = useStore()
    const { onChange } = breadcrumbStore
    const getRoutePath = usePersistFn((routes: routeTypes[], path: string, rootPath: routeTypes[]) => {
        each(routes, (item: routeTypes) => {
            if (path) {
                if (item.path === path) {
                    rootPath.push(item)
                    return false
                } else if (path.indexOf(item.path) !== -1) {
                    rootPath.push(item)
                    if (item.children) {
                        rootPath = getRoutePath(item.children, path, rootPath)
                    }
                }
            } else {
                return false
            }
        })
        return rootPath
    })
    return (
        <Router>
            <Switch>
                {
                    routesMap.map((item: routeTypes, index: number) => {
                        return <Route
                            key={index}
                            path={item.path}
                            exact={item.exact}
                            render={(props: RouteComponentProps) => {
                                onChange(getRoutePath(routesMap, props.location.pathname, []))
                                let Component: any = item.component
                                //如果是不需要权限 或者 已登录 或者 访问路径是/login，则直接返回当前组件
                                if (!item.requiresAuth || fn.getLocalStorage('login') || item.path === "/login") {
                                    return <Component {...props} route={item} />
                                }
                                //否则重定向到/login
                                return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                            }}
                        />
                    })
                }
            </Switch>
        </Router>
    )
}

export default Routes


