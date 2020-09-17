import React from 'react'
import { Button, Layout } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { fn } from '@/utils/fn'
import { usePersistFn } from 'ahooks'
import BreadCrumb from '@layout/BreadCrumb'
import './index.less'
const { Header } = Layout;
const TopHeader = (props: RouteComponentProps) => {
    const onLogout = usePersistFn((): void => {
        fn.removeLocalStorage("login")
        props.history.replace("/login")
    })
    return (<div className="header">
        <Header className="header-content">
            <div className="header-title">
                React后台管理系统
            </div>
            <div>
                <Button type="primary" onClick={onLogout}>退出登录</Button>
            </div>
        </Header>
        <BreadCrumb></BreadCrumb>
    </div>)
}

export default withRouter(TopHeader)