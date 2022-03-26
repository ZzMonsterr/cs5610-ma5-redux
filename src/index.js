import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Grid from './components/grid'

import allReducers from './reducers';
import {createStore} from 'redux'
const store = createStore(allReducers)

ReactDOM.render((
    <Provider store={store}>
        <Grid />
    </Provider>
), document.getElementById('root'))