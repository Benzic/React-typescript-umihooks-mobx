import React from 'react'
import { Button, message } from 'antd'
import { usePersistFn } from 'ahooks'
const ButtonCom: React.FC = ((): JSX.Element => {
    const onClickBtn = usePersistFn((): void => {
        message.info("点击了按钮")
    })
    return <div>
        这是 Button组件<Button type="dashed" onClick={onClickBtn}>按钮</Button>
    </div>
})
export default ButtonCom