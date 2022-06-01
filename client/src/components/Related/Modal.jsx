import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { CardStates } from './Card.jsx';


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
const ExpandedImg = styled.img`
  width: 400px;
  height: auto;
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

export default function Modal({open, onClose}) {

  const {isOpen, setIsOpen} = useContext(CardStates);

  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <OverlayStyles >
        <ModalStyles>
          <div onClick={() => {setIsOpen(false)}}>
            Hello World!
          </div>
        </ModalStyles>
      </OverlayStyles>
    </>,
    document. getElementById('portal')
  );
}