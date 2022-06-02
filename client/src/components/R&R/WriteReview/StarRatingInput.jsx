import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';

import {AllReviewForm} from './NewReviewForm.jsx';

const RatingsForm = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Courier New", Monaco, "Lucida Console";
`
const Overall = styled.h4`
  font-size: 1.25em;
  text-decoration: underline;
`

const RadioButton = styled.input`
  display: none;
`


const StarStyles = styled.div`
  font-size: 2em;
  cursor: pointer;
  position: relative;
  top: 16px;
  margin-left: 5px;
`

const RatingContext = styled.div`
  font-family: "Courier New", Monaco, "Lucida Console";
  font-size: 1.5em;
  position: relative;
  left: 1em;
  top: 20px;
`

export default function StarRatingInput () {

  const {rating, setRating} = useContext(AllReviewForm);
  const [ratingDescription, setRatingDescription] = useState(['','Poor', 'Fair', 'Average', 'Good', 'Great'])
  return (
    <div>
    <RatingsForm>
    <Overall>Overall Rating:</Overall>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
          <RadioButton type="radio" name="ratings" value={ratingValue} onClick={() => setRating(ratingValue)} required>
          </RadioButton>
          <StarStyles>
            <FaStar color={ratingValue <= rating ? "#ff5e5e" : "#70706e"}/>
          </StarStyles>
          </label>
        );
      })}
      {rating ? <RatingContext>{ratingDescription[rating]}</RatingContext> : <></> }
    </RatingsForm>
    </div>
  );

};