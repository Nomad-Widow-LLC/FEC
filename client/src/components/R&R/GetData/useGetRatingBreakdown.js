import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';



export default function useGetRatingBreakdown (ratingsBreakdown) {

  let sum = 0;
  let breakdownArr = [];

  for (let key in ratingsBreakdown) {
    sum += parseInt(ratingsBreakdown[key]);
  }

  for (let i = 5; i > 0; i--) {
    if(ratingsBreakdown['' + i] === undefined) {
      breakdownArr.push(0);
    } else {
      breakdownArr.push(Math.round((ratingsBreakdown['' + i] / sum) * 100));
    }
  }



  return breakdownArr;
};
