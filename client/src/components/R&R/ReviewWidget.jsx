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
  const [reviewData, setReviewData] = useState(dummyReviewListData);
  const [metaData, setMetaData] = useState(dummyMetaReviewData);
  const [reviewsShown, setReviewShown] = useState(2);


  // useEffect(() => {
  //   axios.get('/review', {headers: {Authorization: `${config.GITHUB_API}` }})
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log('Could Not Access Atelier API');
  //     });

  // }, [])



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