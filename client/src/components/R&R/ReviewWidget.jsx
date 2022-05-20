import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import config from '../../../dist/config.js';


export default function ReviewWidget () {

  const [reviews, setReviews] = useState([]);



  // useEffect(() => {
  //   axios.get(`${config.API_PATHNAME}reviews/?product_id=2`, {headers: {Authorization: `${config.GITHUB_API}` }})
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log('Could Not Access Atelier API');
  //     });

  // }, [])

  return (
    <div className="review-widget">
      <div className="review-title">Reviews</div>
    </div>
  );
};