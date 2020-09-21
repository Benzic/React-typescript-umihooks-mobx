import React, { useEffect } from 'react'
import { useDebounceEffect, useMount, useUnmount, useUpdateEffect } from 'ahooks'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/stores';
import { getTestApi } from '@/api/testApi'
import { useSetState } from '@/hooks/useSetState'
import ButtonCom from '@/components/Button'
interface IProps { }
const SubPage: React.FC<IProps> = ((): JSX.Element => {
    const { counterStore } = useStore();
    const { counter, onIncrement, onDecrement } = counterStore

    const [state, setState] = useSetState<number | null | undefined>(12)
    useMount(() => {
        console.log("执行了页面加载")
    })
    useUnmount(() => {
        console.log("执行了页面卸载")
    })
    useUpdateEffect(() => {
        console.log("counter change:" + counter)
        setState(333, (newState: any) => {
            console.log("setState的回调：", newState)
        })
        console.log("修改完毕后的当前数值：", state)
    }, [counter])
    useEffect(() => {
        console.log('useEffect监听数值变化：', state)
    }, [state])
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