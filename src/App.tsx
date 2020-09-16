import React from 'react';
import Routes from '@/router/index';
import { Spin } from "antd"
import { StoreProvider } from '@stores/index';
// 日期组件，antd依赖
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn')

const App = () =>
  <>
    <StoreProvider>
      <Routes />
    </StoreProvider>
    <div id="ajax_loading">
      <div className="ajax_loading_wrapper">
        <Spin></Spin>
      </div>
    </div>
  </>

export default App;