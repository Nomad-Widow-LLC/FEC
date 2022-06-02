import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { CardStates } from './Card.jsx';
import { CarouselStates } from './Carousel.jsx';
import { ModalStates } from './Modal.jsx';

export default function Feature({feature}) {

  const {productName} = useContext(ModalStates);
  const {overviewProduct} = useContext(CarouselStates);

  return (
    <tr className="compareTable">
      <td className="compareTable">{feature[overviewProduct.name]}</td>
      <td className="compareTable">{feature.feature}</td>
      <td className="compareTable">{feature[productName]}</td>
    </tr>
  )
}