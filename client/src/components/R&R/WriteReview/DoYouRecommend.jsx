import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';

const RadioButton = styled.input`

`

export default function DoYouRecommend () {

  const {recommended, setRecommended} = useContext(AllReviewForm);

  return (
    <>
      <h4>Do You Recommend This Product?</h4>
      <RadioButton type="radio" name="recommended" onClick={() => setRecommended(true)} required/>
      <label>Yes</label>
      <RadioButton type="radio" name="recommended" onClick={() => setRecommended(false)} required/>
      <label>No</label><br></br>
    </>
  );
};