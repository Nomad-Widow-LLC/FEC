import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';



export default function useGetAvgRatings (ratingsBreakdown) {



  let sumStars = 0;
  let count = 0;

  for (let key in ratingsBreakdown) {
    count += ratingsBreakdown[key];
    sumStars += parseInt(key) * ratingsBreakdown[key];
  }
  return(sumStars / count);
};

