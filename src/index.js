import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './container/app'

import allReducers from './reducers';
import {createStore} from 'redux'
const store = createStore(allReducers)

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'))