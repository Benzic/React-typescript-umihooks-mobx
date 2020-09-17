import React from 'react'
import { useDebounceEffect, useMount, useUnmount, useUpdateEffect } from 'ahooks'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/stores';
import { getTestApi } from '@/api/testApi'
import ButtonCom from '@/components/Button'
interface IProps { }
const SubPage: React.FC<IProps> = ((): JSX.Element => {
    const { counterStore } = useStore();
    const { counter, onIncrement, onDecrement } = counterStore
    useMount(() => {
        console.log("执行了页面加载")
    })
    useUnmount(() => {
        console.log("执行了页面卸载")
    })
    useUpdateEffect(() => {
        console.log("counter change:" + counter)
    }, [counter])
    useDebounceEffect(() => {
        console.log("counter debounce:" + counter)
    }, [counter])
    return <div>
        这是SubPages-1
        <Button onClick={(): void => {
            getTestApi()
            onIncrement()
        }}>增加</Button>
        <Button onClick={(): void => {
            onDecrement()
        }}>减少</Button>
        count:{counter}
        <ButtonCom></ButtonCom>
    </div>
})
export default observer(SubPage)