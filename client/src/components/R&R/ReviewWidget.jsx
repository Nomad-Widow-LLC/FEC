import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';



export default function ReviewWidget () {

  useEffect(() => {
   axios.get('/reviews')
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log('Could Not Access Atelier API');
    });
  }, [])

  return (
    <div className="review-widget">
      This is a Review Widget!!!
    </div>
  );
};