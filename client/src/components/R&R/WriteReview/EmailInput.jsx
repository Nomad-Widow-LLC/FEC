import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';

const EmailInp = styled.input`
  width: 225px;
  margin-left: 5px;
  margin-bottom: 25px;
`

const EmailHeader = styled.h3`
  margin: 1em 0px 1em 5px;
  text-decoration: underline;


`
export default function EmailInput () {
  const {email, setEmail} = useContext(AllReviewForm);
  return (
    <>
    <EmailHeader>Email (60 Characters Max):</EmailHeader>
      <EmailInp type="email" placeholder="Example: jackson11@email.com" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="60" required/>
      <br></br>
    </>
  );
};