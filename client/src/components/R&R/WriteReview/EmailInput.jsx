import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';

const EmailInp = styled.input`
  width: 225px;
  margin-left: 5px;
`

const EmailHeader = styled.h4`
 margin: 10px 0px 10px 5px;


`
export default function EmailInput () {
  const {email, setEmail} = useContext(AllReviewForm);
  return (
    <>
    <EmailHeader>setEmail (60 Characters Max)</EmailHeader>
      <EmailInp type="email" placeholder="Example: jackson11@email.com" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="60" required/>
      <br></br>
    </>
  );
};