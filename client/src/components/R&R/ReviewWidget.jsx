import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import config from '../../../dist/config.js';
import styled from 'styled-components';
// Import DummyData, until able to handle server api calls
import dummyData from '../../../dist/dummyData.js';
//Child Components
import ReviewsList from './ReviewsList.jsx';
// Create Context Globally
export const AllReviews = createContext();


export default function ReviewWidget () {

  //Using DummyData, need to refactor to use API Atelier
  const [reviewData, setReviewData] = useState(dummyData);



  // useEffect(() => {
  //   axios.get('/review', {headers: {Authorization: `${config.GITHUB_API}` }})
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log('Could Not Access Atelier API');
  //     });

  // }, [])


  //Styled Components go here
  const ReviewFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start
  `
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: left;
    color: palevioletred;

  `;

  const List = styled.div`
    padding: 10px;
  `
  return (

    <div className="review-widget">
      <ReviewFlexBox>
      <Title>
        <div className="review-title">Reviews</div>
      </Title>
        <AllReviews.Provider value={{reviewData, setReviewData}}>
          <List>
            <ReviewsList />
          </List>
        </AllReviews.Provider>
      </ReviewFlexBox>
    </div>
  );
};