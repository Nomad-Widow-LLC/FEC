import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';
const Summary = styled.input`
  width: 500px;
  margin-left: 5px;
`

const SummaryHeader = styled.h3`
  margin: 1.25em 0px 10px 5px;
  text-decoration: underline;

`
export default function ReviewSummary () {
  const {summary, setSummary} = useContext(AllReviewForm);
  return (
    <>
    <SummaryHeader>Summary (60 Characters Max)</SummaryHeader>
      <Summary type="text" placeholder="Example: Best purchase ever!" value={summary} onChange={(e) => setSummary(e.target.value)} maxLength="60" required/>
      <br></br>
    </>
  );
};