import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import NewReview from './NewReview.jsx';


const ReviewWidgetHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;

`
const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  color: black;
  padding-right: 10px;
  margin-left: 10px;
  flex-grow: 2;
`



export default function ReviewHeader() {


  return(
    <ReviewWidgetHeader>
      <Title>
        <div className="review-title">Reviews</div>
      </Title>
      <NewReview />
    </ReviewWidgetHeader>
  );
};