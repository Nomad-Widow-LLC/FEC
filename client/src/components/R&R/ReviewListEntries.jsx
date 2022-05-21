import React, {useState, useContext, createContext, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import Star from '../Overview/ProductInformation/Star.jsx';

export default function ReviewListEntries ({review}) {


  return (
    <div className="review-list-entry">
      <div className="reviewer-name">{review.reviewer_name}</div>
      <div className="date-reviewed">{format(parseISO(review.date), 'PPP')}</div>
      <span className='starRating'>
        {[1,2,3,4,5].map((index) => {
          return (
            <Star index={index} rating={review.rating} key={index}/>
          )
        })}
      </span>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      <div className="review-photos">
        {review.photos.map((entry, index) => {
          return <img key={index} src={entry.url} alt={entry.id} width="100" height="100"></img>
        })}
      </div>
      {review.recommend ?
      <>
      <div className="is-recommended">I recommend this product</div>
      <div className="recommended-icon">Rec icon here</div>
      </>
      : <div className="not-recommended"></div>}


    </div>
  );
}