import React, {useMemo, useState} from 'react';
import styled from 'styled-components';

export const DropdownWrapper = styled.form`
  margin-top: 5px;
  font-size: 20px;
`;

export const StyledSelect = styled.select`
  margin-bottom: 5px;
  font-size: 20px;

`;

export const StyledOption = styled.option`
  justify-content: center;
`;

export const StyledButton = styled.input`
  justify-content: center;
  font-size: 20px;
`;

export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledSelect id="services" name="services" onChange={(event)=>{props.handleChoosingSize(event.target.value)}}>
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export function DropdownQuantity(props) {
  return (
    <DropdownWrapper action={props.action}>
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
    <div className='add-to-cart'>
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
        <Option selected value="-" />
        {quantityArray.map(quantity => {
          return (
            <Option value={quantity} key={quantity}/>
          )}
        )}
      </DropdownQuantity>
    </div>
  );
}
