import React from 'react'
import './square.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeColor, increment, decrement} from '../actions'

export default function Square(props) {

    const {id} = props
    const color = useSelector(state => state.color)
    const dispatch = useDispatch();

    function update() { 
        if (color[id]) {
            dispatch(increment())
        }
        else {
            dispatch(decrement())
        }
        dispatch(changeColor(id))
    }

    return (
        <div className={color[id] ? "square white" : "square black"}
            onClick={update} />
    );

}