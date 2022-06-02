import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';
import {AllReviews} from '../ReviewWidget.jsx';


const CharTitle = styled.h3`
  text-decoration: underline;
`
const CharCats = styled.h4`
  margin-left: 1em;
`


const RadioButton = styled.input`
  margin: 0px 10px;
`


export default function CharacteristicsInput () {

  const {metaData, setMetaData} = useContext(AllReviews);
  const {fitRating, setFitRating, lengthRating, setLengthRating, comfortRating, setComfortRating, qualityRating, setQualityRating} = useContext(AllReviewForm);

  return(
    <>
      <CharTitle>Characteristics Rating:</CharTitle>
      {metaData.characteristics.Fit ? <CharCats>Fit</CharCats> : <></>}
      {metaData.characteristics.Fit ? <>
      {['Runs Tight', 'Runs Slightly Tight', 'Perfect', 'Runs Slightly Long', 'Runs Long'].map((qual, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <RadioButton type="radio" name="fit" value={ratingValue} onClick={() => setFitRating(ratingValue)} required>
            </RadioButton>
          {qual}
          </label>
        );
      })}
    </> : <></>}
      {metaData.characteristics.Length ? <CharCats>Length</CharCats> : <></>}
      {metaData.characteristics.Length ? <>
      {['Runs Short', 'Runs Slightly Short', 'Perfect', 'Runs Slightly Long', 'Runs Long'].map((qual, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <RadioButton type="radio" name="length" value={ratingValue} onClick={() => setLengthRating(ratingValue)} required>
            </RadioButton>
          {qual}
          </label>
        );
      })}
    </> : <></>}
      {metaData.characteristics.Comfort ? <CharCats>Comfort</CharCats> : <></>}
      {metaData.characteristics.Comfort ? <>
      {['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'].map((qual, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <RadioButton type="radio" name="comfort" value={ratingValue} onClick={() => setComfortRating(ratingValue)} required>
            </RadioButton>
          {qual}
          </label>
        );
      })}
    </> : <></>}
      {metaData.characteristics.Quality ? <CharCats>Quality</CharCats> : <></>}
      {metaData.characteristics.Quality ? <>
      {['Poor', 'Below Average', 'Expected', 'Pretty Great', 'Perfect'].map((qual, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <RadioButton type="radio" name="quality" value={ratingValue} onClick={() => setQualityRating(ratingValue)} required>
            </RadioButton>
          {qual}
          </label>
        );
      })}
    </> : <></>}

       <br></br>


    </>
  );
};