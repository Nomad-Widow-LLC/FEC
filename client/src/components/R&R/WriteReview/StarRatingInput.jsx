import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';

import {AllReviewForm} from './NewReviewForm.jsx';

const RatingsForm = styled.div`
  display: flex;
  flex-direction: row;
`

const RadioButton = styled.input`
  display: none;
`


const StarStyles = styled.div`
  cursor: pointer;
`

export default function StarRatingInput () {

  const {rating, setRating} = useContext(AllReviewForm);
  const [ratingDescription, setRatingDescription] = useState(['','Poor', 'Fair', 'Average', 'Good', 'Great'])
  return (
    <div>
    <h4>Overall Rating:</h4>
    <RatingsForm>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
          <RadioButton type="radio" name="ratings" value={ratingValue} onClick={() => setRating(ratingValue)} required>
          </RadioButton>
          <StarStyles>
            <FaStar color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}/>
          </StarStyles>
          </label>
        );
      })}
      {rating ? <div>{ratingDescription[rating]}</div> : <></> }
    </RatingsForm>
    </div>
  );

};