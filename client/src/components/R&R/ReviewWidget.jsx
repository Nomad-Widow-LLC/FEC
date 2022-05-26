import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import config from '../../../dist/config.js';
import styled from 'styled-components';
// Import DummyData, until able to handle server api calls
import dummyReviewListData from '../../../dist/dummyReviewListData.js';
import dummyMetaReviewData from '../../../dist/dummyMetaReviewData.js';
//Child Components

import ReviewHeader from './ReviewHeaders/ReviewHeader.jsx';
import ReviewsList from './ReviewList/ReviewsList.jsx';
import FilterReview from './FilterReviews/FilterReview.jsx';
import OverallRating from './OverallRating/OverallRating.jsx';

import {AllProductInfo} from '../App.jsx';
// Create Context Globally
export const AllReviews = createContext();

//Styled Components go here
const ReviewWidgetContainer = styled.div`
  border-style: groove;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  margin: 0px 125px;
`
const ReviewWidgetBody = styled.div`
  display: flex;
  flex-direction: row;
`
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
`


export default function ReviewWidget () {

  //Using DummyData, need to refactor to use API Atelier
  const {productIDN, setProductIDN} = useContext(AllProductInfo);
  //default review, for mount
  const [reviewData, setReviewData] = useState(dummyReviewListData);
  const [metaData, setMetaData] = useState(dummyMetaReviewData);

  const [sortBy, setSortBy] = useState('relevant');
  const [reviewsShown, setReviewShown] = useState(2);


  // Component did Mount, get review data to render, will also rerender on a productIDN change
  useEffect(() => {
    axios.get(`/review?sort=${sortBy}&&product_id=${productIDN}`)
      .then((data) => {
        // console.log(data.data);
        setReviewData(data.data)})
      .catch((err) => {console.log('Could not reach API')})
      .then(() => {
        axios.get(`/review/meta?product_id=${productIDN}`)
        .then((data) => {
          console.log(data.data);
          setMetaData(data.data);
        })
        .catch((err) => {console.log('Could not reach API')})
      })
  },[productIDN])


  return (
    <div className="review-widget">
    <ReviewWidgetContainer>
        <AllReviews.Provider value={{reviewData, setReviewData, metaData, setMetaData, reviewsShown, setReviewShown}}>
          <ReviewHeader />

          <ReviewWidgetBody>
            <SideBar>
              <OverallRating />
              <FilterReview />
            </SideBar>
            <ReviewsList />
          </ReviewWidgetBody>

        </AllReviews.Provider>
    </ReviewWidgetContainer>
    </div>
  );
};