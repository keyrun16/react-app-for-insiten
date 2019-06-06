import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
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

ReactDOM.render(<RootComponent />, document.getElementById('root'));
