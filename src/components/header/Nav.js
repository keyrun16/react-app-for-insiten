import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render () {
        const userName = this.props.userName;
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={{ pathname: '/' }} title="Logo">
                    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                </Link>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{userName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Nav;
