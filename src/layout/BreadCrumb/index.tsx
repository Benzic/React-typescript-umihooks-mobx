import React from 'react';
import { Breadcrumb } from 'antd'
import { useStore } from '@/stores'
import { routeTypes } from '@/interfaces/routes'
const BreadCrumb: React.FC = () => {
    const { breadcrumbStore } = useStore()
    const { breadData } = breadcrumbStore
    return <Breadcrumb style={{ margin: '16px 0 0 16px' }}>
        {
            breadData.map((item: routeTypes, index: number) => {
                return <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>
            })
        }
    </Breadcrumb>
}
export default BreadCrumb