import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CommonButton from '../common/button/CommonButton';
import {statusOptions} from '../../utils';

class ListItem extends Component {
    constructor (props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete (e) {
        this.props.deleteIteam(e.target.value);
        return false;
    }
    render () {
        const { data, userName } = this.props;
        return (
            <Wrapper className="list-row">
                <section className="user-name">
                    {data.name}
                </section>
                <section className="user-name">
                    {data.financialperformance}
                </section>
                <section className="user-name">
                    {statusOptions[data.status - 1].label}
                </section>
                <section className="edit">
                    <Link
                        to={{ pathname: '/edit/' + data.id,
                            search: '?username=' + userName,
                            state: { data: data } }}
                        title="Edit"
                    >
                    Edit
                    </Link>
                    <CommonButton label="Delete" handleClick={this.handleDelete} value={data.id} styleName="primary" />
                </section>
            </Wrapper>
        );
    }
}

export default ListItem;

const Wrapper = styled.section`
    
`;
