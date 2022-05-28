import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {AllReviews} from '../ReviewWidget.jsx';
import {AllProductInfo} from '../../App.jsx';

const ShowingResults = styled.div`
  font-size: 12px;
  flex-grow: 2;
  color: grey;
  font-style: italic;
`
export default function ShowingReviews () {

  const {reviewData, setReviewData} = useContext(AllReviews);
  const {reviewsShown, setReviewShown} = useContext(AllReviews);
  const [numberReviews, setNumberReviews] = useState(reviewData.results.length);

  useEffect(() => {
    setNumberReviews(reviewData.results.length);
  },[reviewData])

  return (
    <ShowingResults>
      <div className="sort-by">{`Showing ${Math.min(numberReviews, reviewsShown)} of ${numberReviews} reviews`}</div>
    </ShowingResults>
  );

}