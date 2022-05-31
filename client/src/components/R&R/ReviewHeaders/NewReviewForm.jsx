import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import {FaTimes, FaStar} from 'react-icons/fa';


const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 25px;
  zIndex: 1000;
`
const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  zIndex: 1000;
`

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1.0
  }
`

const H1Styles = styled.h1`
  font-family: "Courier New", Monaco, "Lucida Console";
`

const H2Styles = styled.h2`
  font-family: "Courier New", Monaco, "Lucida Console";
`

export default function NewReviewForm ({open, onClose}) {

  const [rating, setRating] = useState(null);

  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <OverlayStyles>
        <ModalStyles>
          <H1Styles>Write Your Review</H1Styles>
          <H2Styles>About the 'Product Name Here'</H2Styles>
          <Icon>
              <FaTimes onClick={onClose}/>
          </Icon>

        </ModalStyles>
      </OverlayStyles>

    </>,
    document.getElementById('form-portal')
  );
}
