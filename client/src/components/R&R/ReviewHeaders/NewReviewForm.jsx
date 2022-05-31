import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function NewReviewForm ({open}) {

  if (!open) return null

  return ReactDOM.createPortal(
    <>

    </>,
    document.getElementById('form-portal')
  );
}
