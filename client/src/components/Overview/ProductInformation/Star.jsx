import React, {useState, useMemo} from 'react'
import { FaStar } from 'react-icons/fa';

const Star = ({index, rating}) => {

  let widthClass = '';

  const fill = useMemo(() => {
    if (rating >= index) {
      widthClass = 'ratingStar100'
    } else if ((index > rating) && ((index - rating) > 0)) {
      let difference = 1 - (index - rating);
      if (difference < .25) {
        widthClass = 'ratingStar0'
      } else if (difference < 0.50) {
        widthClass = 'ratingStar25'
      } else if (difference < 0.75) {
        widthClass = 'ratingStar50'
      } else if (difference < 1) {
        widthClass = 'ratingStar75'
      }
    }
  }, [index, rating]);

  return (
    <div className='star'>
      <span className='unratedStar'>
        <FaStar fill='black'/>
      </span>
      <span className={`ratingStar ${widthClass}`}>
        <FaStar fill='yellow'/>
      </span>
    </div>
  )

}

export default Star;