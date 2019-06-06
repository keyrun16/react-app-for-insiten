import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CommonButton extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
	    this.props.handleClick(e);
    }
    render () {
	    const { styleName, disabled, label, value } = this.props;
	    return (
            <Button
                variant={styleName}
                disabled={disabled}
                onClick={this.handleClick}
                value={value}
            >
                {label}
            </Button>
	    );
    }
}

export default CommonButton;
