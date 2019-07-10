import React from 'react';
import {connect} from 'react-redux';
import './styles.less';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: "INCREMENT"})
    };

    decrement = () => {
        this.props.dispatch({ type: "DECREMENT"})
    };

    render() {
        return(
            <div className="counter-wrapper">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}> - </button>
                    <strong>{this.props.count}</strong>
                    <button onClick={this.increment}> + </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
     count: store.count
});

export default connect(mapStateToProps)(Counter);