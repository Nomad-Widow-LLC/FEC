import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';
const Body = styled.input`
  text-align: left;
  width: 600px;
  margin-left: 5px;
`

const BodyHeader = styled.h4`
 margin: 10px 0px 10px 5px;
`

const Minimum = styled.div`
  font-size: 0.75em;
  font-style: italic;
  padding: 0px 5px;
`
export default function BodySummary () {
  const {body, setBody} = useContext(AllReviewForm);
  const [BodyReqMet, setBodyReqMet] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.length <= 50) {
      setBodyReqMet(false);
      setBody(e.target.value);
    } else {
      setBodyReqMet(true);
      setBody(e.target.value);
    }

  }

  return (
    <>
    <BodyHeader>Body (1000 Characters Max)</BodyHeader>
      <Body type="text" placeholder="Why did you like the product or not?" value={body} onChange={(e) => handleChange(e)} minLength ="50" maxLength="1000" required/>
      {BodyReqMet ? <div>Minimum Reached</div> : <Minimum>Minimum required characters left: {50 - body.length}</Minimum>}
      <br></br>
    </>
  );
};