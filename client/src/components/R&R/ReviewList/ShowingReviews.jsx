import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {AllReviews} from '../ReviewWidget.jsx';

const ShowingResults = styled.div`
  font-size: 12px;
  flex-grow: 2;
  color: grey;
  font-style: italic;
`
export default function ShowingReviews () {

  const {reviewData, setReviewData, reviewsShown, setReviewShown} = useContext(AllReviews);
  const [numberReviews, setNumberReviews] = useState(reviewData.results.length);



  return (
    <ShowingResults>
      <div className="sort-by">{`Showing ${reviewsShown} of ${numberReviews} reviews`}</div>
    </ShowingResults>
  );

}