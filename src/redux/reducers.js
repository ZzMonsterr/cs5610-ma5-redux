/**
 * reducer's fixed signature: (state, action)
 * 
 * 1. get old state
 * 2. calculate the new state based on action.type (w/o changing old state)
 * 3. return new state
 */

import {INCREMENT, DECREMENT} from './action-types'

export function counter(state = 0, action) {
    console.log('counter() - old state: ', state, "; current action: ", action)

    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }

}