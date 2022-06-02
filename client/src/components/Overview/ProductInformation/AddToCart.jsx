import React, {useMemo, useState, useEffect} from 'react';
import styled from 'styled-components';

export const DropdownWrapper = styled.form`
  margin-top: 5px;
  font-size: 100%;
  // @media (max-width: 1100px) {
  //   flex-direction: column;
  // }
`;

export const StyledSelect = styled.select`
  margin-bottom: 5px;
  font-size: 100%;

`;

export const StyledOption = styled.option`
  justify-content: center;
`;

export const StyledButton = styled.input`
  justify-content: center;
  font-size: 100%;
`;

export function Dropdown(props) {
  const quantityArray = useMemo(() => {
    let quantities = [];
    let length = 0;
    if (props.quantity > 15) {
      length = 15;
    } else {
      length = props.quantity;
    }
    for (let i = 1; i < length + 1; i++) {
      quantities.push(i);
    }
    return quantities
  }, [props.size])

  const handleAddToCart = (event) => {
    event.preventDefault();
    alert('Added item to the cart');
  }

  return (
    <DropdownWrapper action={props.action} onSubmit={handleAddToCart} >
      <StyledSelect id="sizes" name="sizes" onChange={(event)=>{props.handleChoosingSize(event.target.value), event.target.setCustomValidity('')}} onInvalid={(event) => event.target.setCustomValidity('Please select size')} required>
        {props.children}
      </StyledSelect>
      {props.allQuantity ? <DropdownQuantity
          buttonText="Add to Cart"
          action="/"
          size={props.size}
        >
          {props.sizeSelected ? <></> : <option selected value="" >-</option>}
          {quantityArray.map(quantity => {
            return (
              <Option value={quantity} key={quantity}/>
            )}
          )}
        </DropdownQuantity> : <></>}
      <StyledButton type="submit" value={props.buttonText}/>
    </DropdownWrapper>
  );
}

export function DropdownQuantity(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledSelect id="quantity" name="quantity" required>
        {props.children}
      </StyledSelect>
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

export default function AddToCart({handleChoosingSize, style, size, quantity, allQuantity, setSize, sizeSelected}) {

  const sizeAndQuantity = useMemo(() => {
    let array = [];
    for (let key in style.skus) {
      if (style.skus[key].quantity !== 0) {
        array.push(style.skus[key])
      }
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
      {allQuantity ?
        <Dropdown
          buttonText="Add to Cart"
          action="/"
          handleChoosingSize={handleChoosingSize}
          allQuantity={allQuantity}
          sizeSelected={sizeSelected}
          size={size}
          quantity={quantity}
        >
          {sizeSelected ? <></> : <option selected value="" >Select Size</option> }
          {sizeAndQuantity.map(set => {
            return (
              <Option value={set.size} key={set.size}/>
            )})}
        </Dropdown> : <div className="out-of-stock">OUT OF STOCK</div>}
    </div>
  );
}
