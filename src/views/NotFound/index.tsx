import React, { useState, useEffect, MouseEvent } from 'react'
import { } from 'ahooks'
import { useImmer } from 'use-immer'
import './index.less'
interface IProps {
}
const NotFound: React.FC<IProps> = ((): JSX.Element => {
    const [state, setState] = useImmer<any>({

    })

    return <div>
        这是NotFound
    </div>
})
export default NotFound