import React, {useMemo, useState} from 'react';
import styled from 'styled-components';

export const DropdownWrapper = styled.form`
  margin-top: 5px;
  font-size: 3px;
  width: 30px;
  height: 10px;
`;

export const StyledSelect = styled.select`
  margin-bottom: 5px;
  font-size: 3px;
  width: 30px;
  height: 10px;
  appearance: none;
  outline: none;
  border:none;
  border-style: solid;
  border-radius: 2px;
`;

export const StyledOption = styled.option`
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledButton = styled.input`
  justify-content: center;
  width: 30px;
  height: 10px;
  font-size: 3px;
`;

export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledLabel htmlFor="services">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="services" name="services" onChange={(event)=>{props.handleChoosingSize(event.target.value)}}>
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export function DropdownQuantity(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledLabel htmlFor="services">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="services" name="services" >
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

export default function AddToCart({handleChoosingSize, style, size, quantity}) {

  const sizeAndQuantity = useMemo(() => {
    console.log('STYLE CHANGED', style.skus)
    let array = [];
    for (let key in style.skus) {
      array.push(style.skus[key])
    }
    return array;
  }, [style])

  const quantityArray = useMemo(() => {
    let quantities = [];
    let length = 0;
    if (quantity > 15) {
      length = 15;
    } else {
      length = quantity;
    }
    for (let i = 1; i < length + 1; i++) {
      quantities.push(i);
    }
    return quantities
  }, [size])

  return (
    <div>
      {/* <h1>Which service are you interested in?</h1> */}
      <Dropdown
        buttonText="Add to Cart"
        action="/"
        handleChoosingSize={handleChoosingSize}
      >
        <Option selected value="Select Size" />
        {sizeAndQuantity.map(set => {
          return (
            <Option value={set.size} key={set.size}/>
          )})}
      </Dropdown>
      <DropdownQuantity
        buttonText="Add to Cart"
        action="/"
      >
        <Option selected value="--" />
        {quantityArray.map(quantity => {
          return (
            <Option value={quantity} key={quantity}/>
          )}
        )}
      </DropdownQuantity>
    </div>
  );
}
