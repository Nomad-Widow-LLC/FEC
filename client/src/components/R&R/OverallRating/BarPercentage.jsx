import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {AllReviews} from '../ReviewWidget.jsx';

const StarTextStyles = styled.div`
  font-size: 0.75em;
  fontWeight: bold;
  width: 50px;
  vertical-align: middle;
  padding-top: 2.5px;
  cursor: pointer;
  &:hover {
    color: blue;
  }




`

const BarPercentageItem = styled.div`
  display: flex;
  flex-direction: row;
`

export default function BarPercentage ({ratio, star, num}) {

  const {breakdownReviews, setBreakdownReviews, selectedStars, setSelectedStars} = useContext(AllReviews);

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 5,
  }

  const fillerStyles = {
    height: '100%',
    width: `${ratio}%`,
    backgroundColor: "lightgreen",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: `${selectedStars['' + star] ? 'blue' : 'black'}`,
    fontWeight: 'bold',
    fontSize: 10,
    verticalAlign: 'top',
    whiteSpace: 'nowrap'
  }

  const handleSelect = () => {

    let tempObj = {...selectedStars};
    if (tempObj['' + star]) {
      delete tempObj['' + star];
    } else {
      tempObj['' + star] = star;
    }

    setSelectedStars(tempObj);
  }

  return (
    <>
    <BarPercentageItem>
    <StarTextStyles>
      <div onClick={() => {handleSelect()}}>{star} Star</div>
    </StarTextStyles>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${num} ratings`}</span>
        </div>
      </div>
    </BarPercentageItem>
    </>
  );

};

