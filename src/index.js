import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Counter from './components/Counter/Counter';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import "./style/main.less";

class RootComponent extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        );
    }
}

const initialState = {
    count: 42
}
function reducer(state = initialState, action){
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
     
}

const store = createStore(reducer);

const CounterApp = () => (
    <Provider store={store}>
        <Counter count={2} />
    </Provider>
);

//ReactDOM.render(<RootComponent />, document.getElementById('root'));
ReactDOM.render(<CounterApp />, document.getElementById('root'));