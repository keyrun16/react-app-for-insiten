import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import TextInput from '../common/textInput/TextInput';
import Header from '../header/Header';
import CommonButton from '../common/button/CommonButton';
import TypeAheadDropdown from '../common/typeaheaddropdown/TypeAheadDropdown';
import { withRouter } from 'react-router-dom';

class Add extends Component {
    constructor (props) {
        super(props);
        this.state = {
            companyID: props.match && props.match.params && props.match.params.id ? props.match.params.id : 0,
            companyInfo: props.location && props.location.state ? props.location.state.data : {},
            userName: queryString.parse(props.location.search).username
        };
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel () {
        this.props.history.push({
            pathname: `/`
        });
    }

    render () {
        const { companyID, companyInfo, userName } = this.state;
        let title = companyID > 0 ? 'Edit company' : 'Add newly acquired company';
        return (
            <Wrapper className="main_container">
                <Header pageTitle={title} userName={userName} />
                <section className="form_fields_wrapper">
                    <TextInput
                        name="name"
                        placeholder="Enter company name"
                        value={companyInfo.name || ''}
                        label="Company name"
                        maxLength={500}
                    />
                    <TextInput
                        name="description"
                        placeholder="Enter company description"
                        value={companyInfo.description || ''}
                        label="Company description"
                        maxLength={500}
                    />
                    <TextInput
                        name="keycontacts"
                        placeholder="Enter key contacts"
                        value={companyInfo.keycontacts || ''}
                        label="Key contacts"
                        maxLength={500}
                    />
                    <TextInput
                        name="name"
                        placeholder="Enter financial performance"
                        value={companyInfo.financialperformance || ''}
                        label="Financial performance (in %)"
                    />
                    <TextInput
                        name="status"
                        placeholder="Enter status"
                        value={companyInfo.status || 0}
                        label="Status"
                    />
                    <TypeAheadDropdown label="Status" value={companyInfo.status} />
                </section>
                <Footer className="footer">
                    <CommonButton label="Save" handleClick={this.handleCancel} styleName="primary" />
                    <CommonButton label="Cancel" handleClick={this.handleCancel} styleName="secondary" />
                </Footer>
            </Wrapper>
        );
    }
}

export default withRouter(Add);

const Wrapper = styled.section`
    .form_fields_wrapper{
        overflow: auto;
        flex:1;
    }
`;

const Footer = styled.section`
	input {
		margin-right: 15px;
	}
`;