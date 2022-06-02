import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import Feature from './Feature.jsx';
import { CarouselStates } from './Carousel.jsx';
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
  export const ModalStates = createContext();

export default function Modal({open, onClose}) {

  let {overviewProduct, setOverviewProduct} = useContext(CarouselStates);
  let {compareFeatures, product, isOpen, setIsOpen} = useContext(CardStates);
  let [productName, setProductName] = useState(product.name);

  if (!open) return null

  return ReactDOM.createPortal(
    <ModalStates.Provider value={{productName}}>
      <OverlayStyles >
        <ModalStyles>
          <div className="compare" onClick={() => {setIsOpen(false)}}>
            <div className="title">Comparing</div>
            <table className="compareTable">
              <tr className="compareTable">
                <th className="compareTable">{overviewProduct.name}</th>
                <th className="compareTable">Feature</th>
                <th className="compareTable">{productName}</th>
              </tr>
              {
                compareFeatures.map((feature) =>
                  <Feature feature={feature} />
                )
              }
            </table>
          </div>
        </ModalStyles>
      </OverlayStyles>
    </ModalStates.Provider>,
    document. getElementById('portal')
  );
}