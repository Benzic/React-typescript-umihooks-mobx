import React from 'react'
import { } from 'ahooks'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/stores';
import { getTestApi } from '@/api/testApi'
interface IProps {}
const SubPage: React.FC<IProps> = ((): JSX.Element => {
    const counterStore: any = useStore().counterStore;
    const { counter, onIncrement, onDecrement } = counterStore
    return <div>
        这是SubPages-1
        <Button onClick={() => {
            getTestApi()
            onIncrement()
        }}>增加</Button>
        <Button onClick={() => {
            onDecrement()
        }}>减少</Button>
        count:{counter}
    </div>
})
export default observer(SubPage)