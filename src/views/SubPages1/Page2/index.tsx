import React, { useState, useEffect, MouseEvent } from 'react'
import { } from 'ahooks'
import { useImmer } from 'use-immer'
interface IProps {
}
const SubPage: React.FC<IProps> = ((): JSX.Element => {
    const [state, setState] = useImmer<any>({

    })

    return <div>
        这是SubPages-2
    </div>
})
export default SubPage