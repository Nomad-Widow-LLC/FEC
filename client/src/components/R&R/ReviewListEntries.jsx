import React, {useState, useContext, createContext, useEffect} from 'react';
import Star from '../Overview/ProductInformation/Star.jsx';

export default function ReviewListEntries (props) {


  return (
    <div className="review-list-entry">
      <div className="reviewer-name">{props.review.reviewer_name}</div>
      <span className='starRating'>
        {[1,2,3,4,5].map((index) => {
          return (
            <Star index={index} rating={props.review.rating} key={index}/>
          )
        })}
      </span>
    </div>
  );
}