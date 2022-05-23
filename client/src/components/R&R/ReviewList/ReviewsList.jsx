import React, {useState, useContext, createContext, useEffect} from 'react';
import ReviewListEntries from './ReviewListEntries.jsx';
import SortBy from './SortBy.jsx';
import ShowingReviews from './ShowingReviews.jsx';

import styled from 'styled-components';
import {AllReviews} from '../ReviewWidget.jsx';

// Styled Components
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  flex-grow: 4;
`
const ListHeaders = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.5em;
`



export default function ReviewsList () {


  const {reviewData, setReviewData} = useContext(AllReviews);



  return (

    <List>
    <div className="review-list">
    <ListHeaders>
      <ShowingReviews/>
      <SortBy />
    </ListHeaders>

      {reviewData.results.map((review, index) => {
        return <ReviewListEntries key={index} review={review}/>
      })}
      </div>
    </List>
  );
}