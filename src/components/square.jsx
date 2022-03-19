import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './square.css'

export default class Square extends Component {

    constructor(props) {
        super(props);
        this.color = "white";
    }

    static propTypes = {
        changeCount: PropTypes.func.isRequired
    }

    setColor = (c) => {this.color = c};

    update = () => {
        if (this.color === "white") {
            this.setColor("black");
            this.props.changeCount(true);  // increment 1
        } else {
            this.setColor("white");
            this.props.changeCount(false); // decrement 1
        }
    }

    render() {
        return (
            <div className="square" id={this.color} onClick={this.update} />
        );
    }

}