import React from 'react';
import { FormGroup } from 'react-bootstrap';
import styled from 'styled-components';
import Select from 'react-select';
import {statusOptions} from '../../../utils';
 
class TypeAheadDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: props.value || 1,
        };   
        this.handleChange = this.handleChange.bind(this);     
    }
  
  handleChange (e){
    this.setState({ selectedOption: e.value });
  };
  render() {
    const { selectedOption } = this.state;
    let {
        label
    } = this.props;
    return (
        <StyledFormGroup>
            <label>{label}</label>
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={statusOptions}                
				placeholder={statusOptions[selectedOption - 1].label}
            />
        </StyledFormGroup>      
    );
  }
}

export default TypeAheadDropdown;

const StyledFormGroup = styled(FormGroup)`
    &&& {
        max-width: 1200px;
        margin: 15px auto;
        label {
            font-weight: bold;
        }  
    } 
`;