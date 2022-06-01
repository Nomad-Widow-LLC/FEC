import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import {FaTimes, FaStar} from 'react-icons/fa';


import {AllReviews} from '../ReviewWidget.jsx';

import StarRatingInput from './StarRatingInput.jsx';
import DoYouRecommend from './DoYouRecommend.jsx';
import CharacteristicsInput from './CharacteristicsInput.jsx';



export const AllReviewForm = createContext();

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

  const {metaData, setMetaData} = useContext(AllReviews);
  // Export context
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(null);

  const [fitRating, setFitRating] = useState(null);
  const [lengthRating, setLengthRating] = useState(null);
  const [comfortRating, setComfortRating] = useState(null);
  const [qualityRating, setQualityRating] = useState(null);
  const [charsObj, setCharsObj] = useState(null);

  useEffect(() => {

    let tempObj = {};
    for (let key in metaData.characteristics) {
      if (key === 'Fit' && fitRating !== null) {
        tempObj[metaData.characteristics.Fit.id] = fitRating;
      } else if (key === 'Length' && lengthRating !== null) {
        tempObj[metaData.characteristics.Length.id] = lengthRating;
      } else if (key === 'Comfort' && comfortRating !== null) {
        tempObj[metaData.characteristics.Comfort.id] = comfortRating;
      } else if (key === 'Quality' && qualityRating !== null) {
        tempObj[metaData.characteristics.Quality.id] = qualityRating;
      } else {

      }
    }
    setCharsObj(tempObj);

  }, [metaData, fitRating, lengthRating, comfortRating, qualityRating])

  useEffect(() => {
    if (open === false) {
      setRating(null);
      setFitRating(null);
      setLengthRating(null);
      setComfortRating(null);
      setQualityRating(null);
      setCharsObj(null);
      setRecommended(null);
    }

  }, [open])


  const handleFormSubmit = () => {
    event.preventDefault();
    console.log('Sending Post Request:')
  }


  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <AllReviewForm.Provider value={{rating, setRating, recommended, setRecommended, fitRating, setFitRating, lengthRating, setLengthRating, comfortRating, setComfortRating, qualityRating, setQualityRating}}>
        <OverlayStyles>
          <ModalStyles>
            <H1Styles>Write Your Review</H1Styles>
            <H2Styles>About the 'Product Name Here'</H2Styles>
            <Icon>
                <FaTimes onClick={onClose}/>
            </Icon>
            <form onSubmit={handleFormSubmit}>
              <StarRatingInput />
              <DoYouRecommend />
              <CharacteristicsInput />
              <input type="submit"/>
            </form>
          </ModalStyles>
        </OverlayStyles>
      </AllReviewForm.Provider>

    </>,
    document.getElementById('form-portal')
  );
}
