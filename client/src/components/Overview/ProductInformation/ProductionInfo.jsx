import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx'

const ProductInfo = () => {
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);

  // useEffect(() => {
  //   axios.get('/review?product_id=' + product_id)
  //   .then( (response) => {
  //     let sumRating = 0;
  //     let results = response.data.results
  //     for (let i = 0; i < results.length; i++) {
  //       sumRating += results[i].rating;
  //     }
  //     let avgRating = sumRating/results.length;
  //     setReviewNum(results.length);
  //     return avgRating;
  //   })
  //   .then((avgRating) => {
  //     setRating(avgRating);
  //   })
  //   .catch((err) => {
  //     console.log('could not access data');
  //     return;
  //   })
  // }, [])

  return (
    <div className='ProductInfo'>
      <StarRating />
      <h6 className='ProductCategory'>Product Category</h6>
      <h3 className='ProductTitle'>Product Title</h3>
      <h6 className='Price'>Price</h6>
      <div className='ProductOverview'>Product Overview</div>
      <div className='SocialMedia'>Share on Social Media</div>
    </div>
  )
}

export default ProductInfo;
