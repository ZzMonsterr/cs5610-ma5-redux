/**
 * include all action creator
 * 
 * () => ({}) return a object (not a function)
 * the outside () means "return"
 * the inside {} means "object"
 */

import {INCREMENT, DECREMENT} from './action-types'

export const incrementCreator = (v) => ({type: INCREMENT, data: v});

export const decrementCreator = (v) => ({type: DECREMENT, data: v});
