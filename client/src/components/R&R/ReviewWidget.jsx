import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import config from '../../../dist/config.js';
import styled from 'styled-components';
// Import DummyData, until able to handle server api calls
import dummyReviewListData from '../../../dist/dummyReviewListData.js';
import dummyMetaReviewData from '../../../dist/dummyMetaReviewData.js';
//Child Components
import NewReview from './AddReview/NewReview.jsx';
import ReviewsList from './ReviewList/ReviewsList.jsx';
// Create Context Globally
export const AllReviews = createContext();

//Styled Components go here
const ReviewWidgetContainer = styled.div`
  border-style: groove;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
`

const ReviewFlexBoxTop = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;

`
const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  color: black;
  padding-right: 10px;
`;




export default function ReviewWidget () {

  //Using DummyData, need to refactor to use API Atelier
  const [reviewData, setReviewData] = useState(dummyReviewListData);
  const [metaData, setMetaData] = useState(dummyMetaReviewData);


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
      <ReviewFlexBoxTop>
        <Title>
          <div className="review-title">Reviews</div>
        </Title>
        <NewReview />
      </ReviewFlexBoxTop>

        <AllReviews.Provider value={{reviewData, setReviewData}}>

          <ReviewsList />
        </AllReviews.Provider>
    </ReviewWidgetContainer>
    </div>
  );
};