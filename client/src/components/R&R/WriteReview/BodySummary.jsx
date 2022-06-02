import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';
const Body = styled.input`
  text-align: left;
  width: 600px;
  margin-left: 5px;
`

const BodyHeader = styled.h3`
  margin: 1.25em 0px 1em 5px;
  text-decoration: underline;
`

const Minimum = styled.div`
  font-size: 0.75em;
  font-style: italic;
  padding: 0px 5px;
  margin-top: .5em;
  margin-left: 1em;
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