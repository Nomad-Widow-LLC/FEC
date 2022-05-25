import React, {useState, useEffect} from 'react';
import Star from './Star.jsx';

const StarRating = ({rating, reviewNum}) => {

  if (rating === 0) {
    return null;
  }
  return (
    <span className='starRating'>
      {[1,2,3,4,5].map((idx) => {
        return (
          <Star idx={idx} rating={rating} key={idx}/>
        )
      })}
      {reviewNum ? <button className='readAllRatingsButton'> Read all {reviewNum} reviews </button> : <></>}

    </span>
  )
}

export default StarRating;