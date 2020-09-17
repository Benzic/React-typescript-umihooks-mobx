import React from 'react'
import { Input, Button, message } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/stores';
import { usePersistFn } from 'ahooks';
import './index.less'
import { useImmer } from 'use-immer';
interface userInfoType {
    username: string, password: string
}
const LoginIndex = (props: RouteComponentProps) => {
    const { loginStore } = useStore()
    const { login } = loginStore
    const [loginInfo, setLoginInfo] = useImmer<userInfoType>({
        username: "",
        password: ""
    })
    const onSubmit = usePersistFn(async () => {
        try {
            if (!loginInfo.username || !loginInfo.password) {
                message.error("请输入用户名和密码")
                return
            }
            const res: userInfoType = await login(loginInfo)
            console.log(res)
            props.history.replace("/pages")
        } catch (error) {

        }
    })
    return (<div className="warpper login__form--warpper">
        <div className="login__form--contain">
            <h1 className="login__form--title">登录</h1>
            <div className="login__form--item">
                <div className="login__form--item--icon"></div>
                <Input className="login__form--item--input" onInput={(e: any) => {
                    e.persist();
                    setLoginInfo(state => {
                        state.username = e?.target?.value
                    })
                }}></Input>
            </div>
            <div className="login__form--item">
                <div className="login__form--item--icon"></div>
                <Input className="login__form--item--input" onInput={(e: any) => {
                    e.persist();
                    setLoginInfo(state => {
                        state.password = e?.target?.value
                    })
                }}></Input>
            </div>
            <Button className="login__form--submit" type="primary" onClick={onSubmit}>登录</Button>
        </div>
    </div>)
}

export default withRouter(observer(LoginIndex))