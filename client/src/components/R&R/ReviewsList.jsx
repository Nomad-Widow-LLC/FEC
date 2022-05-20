import React, {useState, useContext, createContext, useEffect} from 'react';
import ReviewListEntries from './ReviewListEntries.jsx';

import {AllReviews} from './ReviewWidget.jsx';


export default function ReviewsList () {

  const {reviewData, setReviewData} = useContext(AllReviews);


  return (
    <div className="review-list">
    {reviewData.results.map((review, index) => {
      return <ReviewListEntries key={index} review={review}/>
    })}

    </div>
  );
}