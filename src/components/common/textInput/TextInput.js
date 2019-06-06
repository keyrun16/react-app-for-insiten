import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

class TextInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            textValue: props.value ? props.value : ''
        };
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onChange (e) {
        this.setState({ textValue: e.value });
        //this.props.onChange(e);
    }

    onKeyPress (e) {
        //this.props.onKeyPress(e);
    }

    render () {
        let {
            label,
            maxLength,
            name,
            placeholder
        } = this.props;

        return (
            <StyledFormGroup>
                <label>{label}</label>
                <FormControl
                    type="text"
                    className="textInput"
                    name={name}
                    id={name}
                    value={this.state.textValue}
                    placeholder={placeholder}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    maxLength={maxLength}
                />
            </StyledFormGroup>
        );
    }
}
Object.assign(TextInput, {
    propTypes: {
        maxLength: PropTypes.number,
        name: PropTypes.string,
        onChange: PropTypes.func,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string
    },
    defaultProps: {
        maxLength: 100,
        placeholder: '',
        value: '',
        label: ''
    }
});

export default TextInput;

const StyledFormGroup = styled(FormGroup)`
    &&& {
        max-width: 1200px;
        margin: 15px auto;
        label {
            font-weight: bold;
        }
        input[type='text'] {
            border: 1px solid #81858b;
            min-height: 45px;
            &:focus {
                box-shadow: none;
                border-color: #81858b !important;
            }
        }   
    } 
`;
