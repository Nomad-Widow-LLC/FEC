import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';
import {FaUserTie} from 'react-icons/fa';

const ResponseBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0.5;
  border-style: groove;
  border-width: 1px;
  border-color: black;
  border-radius: 1px;
  box-shadow: 1px 1px grey;
  margin: 1em 1em 0.5em 2em;
  padding: 0px;
  width: auto;
`

const ResHeader = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 0.7;
  font-size: 1em;
  font-style: italic;
  padding: 5px;

`

const ResIcon = styled.div`
  font-size: 1.5em;
  margin-right: 5px;
`

const ResBody = styled.div`
  font-size: 1em;
  font-style: italic;
  padding: 5px 0px 10px 20px;

`

export default function ReviewResponse({response}) {

  return(
    <ResponseBox>
      <div className="review-response">


      <ResHeader>
        <ResIcon>
          <FaUserTie />
        </ResIcon>
        <div className="header">Response from Seller:</div>
      </ResHeader>
      <ResBody>
        <div className="emp-response">{response}</div>
      </ResBody>
      </div>
    </ResponseBox>
  );
};