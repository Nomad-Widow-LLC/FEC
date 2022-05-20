import React, {useState, useEffect} from 'react';
import Star from './Star.jsx';
import axios from 'axios';

const StarRating = () => {
  // states:
  // Rating, setRating - this is determined from the data, this will determine how many stars are colored
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);

  // get request to get rating of product and set state of rating
  // if there are no ratings/reviews, this section is hidden

  useEffect(() => {
    // when user clicks on an item, they should be able to get information on a specific item
    let product_id = '40344'

    // axios.get('/products?product_id=' + product_id)
    axios.get('/review?product_id=' + product_id)
    .then( (response) => {
      let sumRating = 0;
      let results = response.data.results
      console.log(results);
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

  return (
    <span className='starRating'>
      {[1,2,3,4,5].map((index) => {
        return (
          <Star index={index } rating={rating} key={index}/>
        )
      })}
      <button className='viewAllRatings'> Read all {reviewNum} reviews </button>
    </span>
  )
}

export default StarRating;