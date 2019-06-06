
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Add from './components/additem/Add';
import List from './components/list/List';

class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/add" component={Add} />
                <Route exact path="/edit/:id" component={Add} />
                <Route component={List} />
            </Switch>
        );
    }
}

export default Routes;
