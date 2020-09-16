import React from 'react';
import { Breadcrumb } from 'antd'
const BreadCrumb: React.FC<any> = () => {
    return <Breadcrumb style={{ margin: '16px 0 0 16px' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
            <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
}
export default BreadCrumb