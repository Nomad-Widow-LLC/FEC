import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx'
import Carousel from "../ImageGallery/Carousel.jsx"
import axios from 'axios';

const ProductInfo = () => {
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);
  const [product, setProduct] = useState({});

  useEffect(() => {
    let product_id = '40344';
    axios.get('/product?product_id=' + product_id)
      .then((response) => {
        setProduct(response.data);
      })
      .then (() => {
        return axios.get('/review?product_id=' + product_id)
      })
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

  return (
    <div className='productAndImage'>
        <Carousel/>
        <div className='ProductInfo'>
        <StarRating rating={rating} reviewNum={reviewNum}/>
        <h6 className='ProductCategory'>{product.category}</h6>
        <h3 className='ProductTitle'>{product.name}</h3>
        <h6 className='Price'>${product.default_price}</h6>
        <h6 className='ProductOverview'>{product.description}</h6>
        <h6 className='SocialMedia'>Share on Social Media</h6>
      </div>
    </div>
  )
}

export default ProductInfo;
