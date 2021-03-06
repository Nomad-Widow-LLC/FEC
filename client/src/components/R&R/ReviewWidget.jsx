import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
// import config from '../../../dist/config.js';
import styled from 'styled-components';
// Import DummyData, until able to handle server api calls
import dummyReviewListData from '../../../dist/dummyReviewListData.js';
import dummyMetaReviewData from '../../../dist/dummyMetaReviewData.js';
//Child Components

import ReviewHeader from './ReviewHeaders/ReviewHeader.jsx';
import ReviewsList from './ReviewList/ReviewsList.jsx';
import OverallRating from './OverallRating/OverallRating.jsx';
import Characteristics from './OverallRating/Characteristics.jsx';


import {AllProductInfo} from '../App.jsx';
// Create Context Globally
export const AllReviews = createContext();

//Styled Components go here
const ContainerContainer = styled.div`
  background-color: #fafafa;
`
const ReviewWidgetContainer = styled.div`
  background-color: #fafafa;
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

  const [breakdownReviews, setBreakdownReviews] = useState({results: []});
  const [selectedStars, setSelectedStars] = useState({});
  const [didSelect, setDidSelect] = useState(false);

  const [sortBy, setSortBy] = useState('relevant');
  const [reviewsShown, setReviewShown] = useState(2);
  const [totalReviews, setTotalReviews] = useState();


  // Component did Mount, get review data to render, will also rerender on a productIDN change
  useEffect(() => {

    axios.get(`/review/meta?product_id=${productIDN}`)
      .then((data) => {setMetaData(data.data)})
      .catch((err) => {console.log('Could not reach Metadata Atelier API')})
      .then(() => {
        axios.get(`/review?sort=${sortBy}&&product_id=${productIDN}&&count=${5}`)
          .then((data) => {setReviewData(data.data)})
          .catch((err) => {console.log('Could not reach review Atelier API')})
      })
  },[productIDN])

  useEffect(() => {
    if(!totalReviews) {

    } else {
      axios.get(`/review?sort=${sortBy}&&product_id=${productIDN}&&count=${totalReviews}`)
        .then((data) => {setReviewData(data.data)})
        .catch((err) => {console.log('Could not reach review Atelier API')})
    }
  },[totalReviews])

  useEffect(() => {
    if(!totalReviews) {

    } else {
      axios.get(`/review?sort=${sortBy}&&product_id=${productIDN}&&count=${totalReviews}`)
        .then((data) => {
          // console.log(data.data);
          setReviewData(data.data)})
        .catch((err) => {console.log('Could not reach API')})
    }
  }, [sortBy])


  useEffect(() => {
    let tempArr = reviewData.results.filter((review) => selectedStars['' + review.rating] === review.rating)
    setBreakdownReviews({results: tempArr});
    if (Object.keys(selectedStars).length) {
      setDidSelect(true);
    } else {
      setDidSelect(false);
    }
  }, [selectedStars])




  return (
    <div className="review-widget">
    <ContainerContainer>
      <ReviewWidgetContainer>
          <AllReviews.Provider value={{reviewData, setReviewData, metaData, setMetaData, reviewsShown, setReviewShown, sortBy, setSortBy, totalReviews, setTotalReviews, breakdownReviews, setBreakdownReviews, selectedStars, setSelectedStars, breakdownReviews, setBreakdownReviews, didSelect, setDidSelect}}>
            <ReviewHeader />

            <ReviewWidgetBody>
              <SideBar>
                <OverallRating />
                <Characteristics/>
              </SideBar>
              <ReviewsList />
            </ReviewWidgetBody>

          </AllReviews.Provider>
      </ReviewWidgetContainer>
    </ContainerContainer>
    </div>
  );
};