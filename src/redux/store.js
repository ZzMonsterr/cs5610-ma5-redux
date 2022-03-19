/**
 * store and manage all states
 */
import {createStore} from 'redux';
import {counter} from './reducers';

// call reducer (counter) to get the initial state
const store = createStore(counter)

export default store