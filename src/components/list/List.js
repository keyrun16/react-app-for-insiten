import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../header/Header';
import ListItem from './ListItem';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            companiesInfo: {},
            list: [],
            isLoading: true,
            errors: null
        };
        this.deleteIteam = this.deleteIteam.bind(this);
    }

    componentDidMount () {
        this.getCompanies();
    }

    getCompanies () {
        axios.get("./acquisitions.json")
            .then(response => {
                this.setState({
                    companiesInfo: response.data,
                    list: response.data.companies,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    deleteIteam (id) {
        console.log(id);
        const currentLitst = this.state.list;
        const newList = currentLitst.filter(item => item.id !== Number(id));
        this.setState({ list: newList });
    }

    render () {
        const companiesList = this.state.list;
        const userName = this.state.companiesInfo.username;
        return (
            <Wrapper className="main_container">
                <Header showButton pageTitle="Acquired companies list" userName={userName} />
                {companiesList && companiesList.length > 0 ?
                    <section className="list-table">
                        <section className="list-header">
                            <section className="user-name">
                                Company Name
                            </section>
                            <section className="user-name">
                                Financial Performance
                            </section>
                            <section className="user-email">
                                Status
                            </section>
                            <section className="edit" />
                        </section>
                        {
                            companiesList.map((company) => {
                                return <ListItem data={company} deleteIteam={this.deleteIteam} userName={userName} />;
                            })
                        }
                    </section> :
                    <strong className="noRecords">
                        No records to show.
                    </strong>
                }
            </Wrapper>
        );
    }
}

export default List;

const Wrapper = styled.section`
    .list-table {
        margin: 0;
        width: 100%;
        border: 0;
        display: inline-block;
        padding: .5rem 1rem;
        flex: 1;
        overflow: auto;
        flex-flow: column;
        display: flex;
        
        .list-header {
            font-weight: bold;
            padding-bottom: 5px;
            padding-left: 0;
            border-bottom: 1px solid #eee;
        } 
        .list-row {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
            padding: 5px 0;
        }
        .edit {
            display: inline-flex;
            align-items: center;
            position: relative;
            margin-left: auto;
            a{
                margin-right:15px;
            }            
        }        
    }
    .user-name,
    .user-email {
        display: inline-block;
        padding: 5px 15px;
        width: 30%;
        min-width: 30%;
        vertical-align: top;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;
