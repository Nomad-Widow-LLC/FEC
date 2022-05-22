import React, {useState, useContext, createContext, useEffect} from 'react';
import ReviewListEntries from './ReviewListEntries.jsx';

import styled from 'styled-components';
import {AllReviews} from '../ReviewWidget.jsx';

// Styled Components
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 5px;
  gap: 10px;
`

export default function ReviewsList () {

  const {reviewData, setReviewData} = useContext(AllReviews);


  return (
    <List>
      <div className="review-list">
      {reviewData.results.map((review, index) => {
        return <ReviewListEntries key={index} review={review}/>
      })}
      </div>
    </List>
  );
}