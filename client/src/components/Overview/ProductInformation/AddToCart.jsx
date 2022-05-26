import React from 'react';
import styled from 'styled-components';

export const DropdownWrapper = styled.form`
  margin-top: 5px;
  font-size: 20px;
  // width: 30px;
  // height: 10px;
`;

export const StyledSelect = styled.select`
  margin-bottom: 5px;
  font-size: 20px;
  // width: 30px;
  // height: 10px;
`;

export const StyledOption = styled.option`
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledButton = styled.input`
  justify-content: center;
  // width: 100px;
  // height: 10px;
  font-size: 20px;
`;

export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledLabel htmlFor="services">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      <StyledButton type="submit" value={props.buttonText} />
    </DropdownWrapper>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}

export default function AddToCart() {
  return (
    <div>
      {/* <h1>Which service are you interested in?</h1> */}
      <Dropdown
        formLabel="Select Size"
        buttonText="Add to Cart"
        action="/"
      >
        <Option selected value="--" />
        <Option value="xs" />
        <Option value="s" />
        <Option value="m" />
      </Dropdown>
      <Dropdown
        formLabel="Select Quantity"
      >
        <Option selected value="--" />
        <Option value="1" />
        <Option value="2" />
        <Option value="3" />
      </Dropdown>
    </div>
  );
}
