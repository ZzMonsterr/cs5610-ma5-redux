import colorReducer from "./color";
import counterReducer from "./counter";
import {combineReducers} from 'redux'

const allReducers = combineReducers(
    {
        counter: counterReducer,
        color: colorReducer
    }
)
export default allReducers