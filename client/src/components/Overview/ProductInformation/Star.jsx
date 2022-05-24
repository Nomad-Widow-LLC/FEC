import React, {useState, useMemo} from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa';

const Star = ({index, rating}) => {

  const widthClass = useMemo(() => {
    if (rating >= index) {
      return 'ratingStar100';
    } else if ((index > rating) && ((index - rating) > 0)) {
      let difference = 1 - (index - rating);
      if (difference < .25) {
        return 'ratingStar0';
      } else if (difference < 0.50) {
        return 'ratingStar25';
      } else if (difference < 0.75) {
        return 'ratingStar50';
      } else if (difference < 1) {
        return 'ratingStar75';
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