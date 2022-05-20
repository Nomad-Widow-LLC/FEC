import React, {useState, useEffect} from 'react';
import Star from './Star.jsx';
// import config from '../../../../../client/dist/config.js'

const StarRating = () => {
  // states:
  // Rating, setRating - this is determined from the data, this will determine how many stars are colored
  const [rating, setRating] = useState(0);

  // get request to get rating of product and set state of rating
  // if there are no ratings/reviews, this section is hidden
  // axios.get
  useEffect(() => {
    setRating(4.3);
  }, [])

  return (
    <span className='starRating'>
      {[1,2,3,4,5].map((index) => {
        return (
          <Star index={index } rating={rating} key={index}/>
        )
      })}
      <button className='viewAllRatings'> Read all # reviews </button>
    </span>
  )
}

export default StarRating;