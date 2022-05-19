import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import config from '../../../dist/config.js';


export default function ReviewWidget () {





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
      This is a Review Widget!!!
    </div>
  );
};