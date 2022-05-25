import React, {useState, useMemo, useCallback} from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa';

const Star = ({idx, rating}) => {

  // let widthClass = '';

  const widthClass = useMemo(() => {
    if (rating >= idx) {
      return 'ratingStar100'
    } else if ((idx > rating) && ((idx - rating) > 0)) {
      let difference = 1 - (idx - rating);
      if (difference < .25) {
        return 'ratingStar0'
      } else if (difference < 0.50) {
        return 'ratingStar25'
      } else if (difference < 0.75) {
        return 'ratingStar50'
      } else if (difference < 1) {
        return 'ratingStar75'
      }
    }
  }, [rating]);

  return (
    <div className='star'>
      <span className='unratedStar'>
        <FaRegStar fill='black'/>
      </span>
      <span className={`ratingStar ${widthClass}`}>
        <FaStar fill='black'/>
      </span>
    </div>
  )
}

export default Star;