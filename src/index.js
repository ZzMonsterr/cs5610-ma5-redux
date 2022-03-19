import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './container/app'
import store from './redux/store';    // 生成一个store对象，来存储和管理所有state

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'))