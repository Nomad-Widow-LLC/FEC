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

const ShowMore = styled.button`
  font-size: 14px;
  font-family: "Courier New", Monaco, "Lucida Console";
  color: white;
  margin: 1em;
  padding: 5px 20px;
  border-radius: 3px;
  background-color: black;
`
const Scroll = styled.div`
  overflow: auto;
  max-height: 100vh;
`

export default function ReviewsList () {


  const {reviewData, setReviewData} = useContext(AllReviews);
  const {reviewsShown, setReviewShown} = useContext(AllReviews);



  return (

    <List>
    <div className="review-list">
      <ListHeaders>
        <ShowingReviews/>
        <SortBy />
      </ListHeaders>

      <Scroll>
        {reviewData.results.map((review, index) => {
          if(index < reviewsShown) {
            return <ReviewListEntries key={index} review={review}/>
          } else {
            return <div key={index}></div>
          }
        })}
        {(reviewData.results.length < reviewsShown ?
          <></> :
          <ShowMore onClick={() => {setReviewShown(reviewData.results.length)}}>Show more reviews</ShowMore>)}
      </Scroll>


    </div>
    </List>
  );
}