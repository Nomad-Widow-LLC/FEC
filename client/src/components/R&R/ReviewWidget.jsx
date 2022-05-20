import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import config from '../../../dist/config.js';

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
  //   axios.get(`${config.API_PATHNAME}reviews/?product_id=2`, {headers: {Authorization: `${config.GITHUB_API}` }})
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log('Could Not Access Atelier API');
  //     });

  // }, [])




  return (
    <div className="review-widget">
      <div className="review-title">Reviews</div>
        <AllReviews.Provider value={{reviewData, setReviewData}}>
          <ReviewsList />
        </AllReviews.Provider>
    </div>
  );
};