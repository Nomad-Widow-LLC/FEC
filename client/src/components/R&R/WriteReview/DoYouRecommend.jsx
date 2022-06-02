import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';

const RadioButton = styled.input`
  margin: -5px 10px;

`

const RecTitle = styled.h4`

  margin-left: 5px;
  margin-block-start: 0em;
  margin-block-end: 5px;
`
export default function DoYouRecommend () {

  const {recommended, setRecommended} = useContext(AllReviewForm);

  return (
    <>
      <RecTitle>Do You Recommend This Product?</RecTitle>
      <RadioButton type="radio" name="recommended" onClick={() => setRecommended(true)} required/>
      <label>Yes</label>
      <RadioButton type="radio" name="recommended" onClick={() => setRecommended(false)} required/>
      <label>No</label><br></br>
    </>
  );
};