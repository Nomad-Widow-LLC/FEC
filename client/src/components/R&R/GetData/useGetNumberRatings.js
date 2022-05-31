import React, {useState, useContext, createContext, useEffect} from 'react';


export default function useGetNumberRatings (metaData) {

  let count = 0;


  for (let key in metaData) {
    count += parseInt(metaData[key]);
  }
  // console.log(count);
  return count;
};
