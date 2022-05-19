import React, {useState, useEffect} from 'react';
import Star from './Star.jsx';

const StarRating = () => {
  // states:
  // Rating, setRating - this is determined from the data, this will determine how many stars are colored
  const [rating, setRating] = useState(0);

  // get request to get rating of product and set state of rating
  useEffect(() => {
    setRating(4);
  })

  return (
    <div className='StarRating'>
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <Star index={index} rating={rating} key={index}/>
        )
      })}
    </div>
  )
}

export default StarRating;