import React, {useState, useEffect} from 'react';
import Star from './Star.jsx';

const StarRating = ({rating, reviewNum}) => {

  if (rating === 0) {
    return null;
  }
  // add className='starRating' back into to span tag
  return (
    <span className='starRating'>
      {[1,2,3,4,5].map((idx) => {
        return (
          <Star idx={idx} rating={rating} key={idx}/>
        )
      })}
      {reviewNum ? <a className='readAllRatingsButton' href="#review-widget"> Read all {reviewNum} reviews </a> : <></>}

    </span>
  )
}

export default StarRating;