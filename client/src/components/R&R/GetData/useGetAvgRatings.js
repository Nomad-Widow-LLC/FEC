import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';

import {AllReviews} from '../ReviewWidget.jsx';

export default function useGetAvgRatings (ratingsBreakdown) {


  // const [averageRatings, setAverageRatings] = useState(null)


  let sumStars = 0;
  let count = 0;

  for (let key in ratingsBreakdown) {
    count += ratingsBreakdown[key];
    sumStars += parseInt(key) * ratingsBreakdown[key];
  }
  return(sumStars / count);




  // return averageRatings;

};