import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import ReviewListEntries from './ReviewListEntries.jsx';
import SortBy from './SortBy.jsx';
import ShowingReviews from './ShowingReviews.jsx';

import styled from 'styled-components';
import {AllReviews} from '../ReviewWidget.jsx';
import {AllProductInfo} from '../../App.jsx';

// Styled Components
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  flex-grow: 4;
  max-width: 90%;
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
  max-height: auto;
  max-width: 100%;
`

export default function ReviewsList () {

  const {productIDN, setProductIDN} = useContext(AllProductInfo);
  const {reviewData, setReviewData} = useContext(AllReviews);
  const {breakdownReviews, setBreakdownReviews} = useContext(AllReviews);
  const {reviewsShown, setReviewShown} = useContext(AllReviews);
  const {totalReviews, setTotalReviews} = useContext(AllReviews);
  const {sortBy, setSortBy} = useContext(AllReviews);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if(!totalReviews) {

    } else {
      axios.get(`/review?sort=${sortBy}&&product_id=${productIDN}&&count=${totalReviews}`)
        .then((data) => {setReviewData(data.data)})
        .catch((err) => {console.log('Could not retrieve from Atelier API')})
        .then(() => {setReviewShown(totalReviews)})
    }
  }, [showAll])

  return (

    <List>
    <div className="review-list">
      <ListHeaders>
        <ShowingReviews/>
        <SortBy />
      </ListHeaders>

      <Scroll>
        {reviewData.results.map((review, index) => {
          if(index < (reviewsShown ? reviewsShown : 2)) {
            return <ReviewListEntries key={index} review={review}/>
          } else {
            return <div key={index}></div>
          }
        })}
        {(showAll ?
          <></> :
          <ShowMore onClick={() => {setShowAll(true)}}>Show more reviews</ShowMore>)}
      </Scroll>


    </div>
    </List>
  );
}