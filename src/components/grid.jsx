import React from 'react'
import Square from './square'
import './grid.css'
import {useSelector} from 'react-redux'

export default function Grid () {

    const counter = useSelector(state => state.counter)

    return (
        <div className="container">
            <h1>Count: {counter}</h1>
            <div className="grid">
                <Square id="1" />
                <Square id="2" />
                <Square id="3" />
                <Square id="4" />
            </div>
        </div>
    );

}