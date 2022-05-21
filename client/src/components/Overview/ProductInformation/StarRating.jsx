import React, {useState, useEffect} from 'react';
import Star from './Star.jsx';
import axios from 'axios';

const StarRating = (props) => { // --> delete props
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);

  // get request to get rating of product and set state of rating
  // if there are no ratings/reviews, this section is hidden
  useEffect(() => {
    // ** THIS NEEDS TO BE CHANGED **
    // when user clicks on an item, they should be able to get information on a specific item
    // let product_id = '40344' --> change back before commit

    axios.get('/review?product_id=' + props.product_id) // --> change this back to just product_id
    .then( (response) => {
      let sumRating = 0;
      let results = response.data.results
      for (let i = 0; i < results.length; i++) {
        sumRating += results[i].rating;
      }
      let avgRating = sumRating/results.length;
      setReviewNum(results.length);
      return avgRating;
    })
    .then((avgRating) => {
      setRating(avgRating);
    })
    .catch((err) => {
      console.log('could not access data');
      return;
    })
  }, [])

  if (rating === 0) {
    return null;
  }
  return (
    <span className='starRating'>
      {[1,2,3,4,5].map((index) => {
        return (
          <Star index={index } rating={rating} key={index}/>
        )
      })}
      <button className='readAllRatingsButton'> Read all {reviewNum} reviews </button>
    </span>
  )
}

export default StarRating;