import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import CommonButton from '../common/button/CommonButton';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleAddClick () {
        this.props.history.push({
            pathname: `/add`,
            search: '?username=' + this.props.userName
        });
    }

    render () {
        const { pageTitle, showButton, userName } = this.props;
        return (
            <React.Fragment>
                <Nav userName={userName} />
                <HeaderWrapper>
                    <h1>{pageTitle}</h1>
                    {showButton &&
                     <CommonButton label="Add" handleClick={this.handleAddClick} styleName="primary" />
                    }
                </HeaderWrapper>
            </React.Fragment>
        );
    }
}

export default withRouter(Header);

const HeaderWrapper = styled.section`
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    border-bottom: 1px solid #b9b9b9;

    .btn{
        margin-left: auto;
    }
`;
