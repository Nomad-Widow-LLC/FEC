import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';

const User = styled.input`
  width: 150px;
  margin-left: 5px;
`

const NicknameHeader = styled.h3`
  ${'' /* margin: 10px 0px 10px 5px; */}
  margin: 1em 0px 1em 5px;
  text-decoration: underline;

`
export default function SetNickname () {
  const {nickname, setNickname} = useContext(AllReviewForm);
  return (
    <>
    <NicknameHeader>Nickname (60 Characters Max):</NicknameHeader>
      <User type="text" placeholder="Example: jackson11!" value={nickname} onChange={(e) => setNickname(e.target.value)} maxLength="60" required/>
      <br></br>
    </>
  );
};