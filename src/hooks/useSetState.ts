/*
 * @Author: your name
 * @Date: 2020-08-12 16:54:40
 * @LastEditTime: 2020-09-21 11:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \BigDataAP\src\hooks\useImmer.ts
 */

import { useState, useEffect, useRef, useCallback } from 'react'
export const useSetState = <T extends any>(
    initialState: T = {} as T,
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>), cb?: Function) => void] => {
    const [state, setState] = useState<T>(initialState);
    const callBack = useRef<Function | null>(null)
    const setMergeState = useCallback(
        (patch, cb) => {
            callBack.current = cb;
            setState((prevState) => {
                if (Object.prototype.toString.call(patch).slice(8, -1) === 'Object') {
                    return Object.assign({}, prevState, patch)
                } else {
                    return patch
                }
            });
        },
        [setState],
    );
    useEffect(() => {
        callBack.current && callBack.current(state)
    }, [state])
    return [state, setMergeState];
};

export default useSetState