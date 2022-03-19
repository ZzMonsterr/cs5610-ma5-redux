import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Square from './square'
import './grid.css'

export default class Grid extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }

    changeCount = (is_increment) => {
        // const {count} = this.props
        // console.log(count);
        if (is_increment) {
            this.props.increment(1);
        } else {
            this.props.decrement(1);
        }
    }

    render() {
        const {count} = this.props

        return (
            <div className="container">
                <h1>Count: {count}</h1>
                <div className="grid">
                    <Square changeCount={this.changeCount}/>
                    <Square changeCount={this.changeCount}/>
                    <Square changeCount={this.changeCount}/>
                    <Square changeCount={this.changeCount}/>
                </div>
            </div>
        );
    }
}