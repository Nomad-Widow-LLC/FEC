import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {AllReviews} from '../ReviewWidget.jsx';
import {AllProductInfo} from '../../App.jsx';

import useGetNumberRatings from '../GetData/useGetNumberRatings.js';


const ShowingResults = styled.div`
  font-size: 12px;
  flex-grow: 2;
  color: grey;
  font-style: italic;
`
export default function ShowingReviews () {

  const {reviewData, setReviewData} = useContext(AllReviews);
  const {metaData, setMetaData} = useContext(AllReviews)
  const {totalReviews, setTotalReviews} = useContext(AllReviews);
  const {reviewsShown, setReviewShown} = useContext(AllReviews);
  const [numberReviews, setNumberReviews] = useState(useGetNumberRatings(metaData.ratings));

  useEffect(() => {
    setNumberReviews(useGetNumberRatings(metaData.ratings));
    setTotalReviews(useGetNumberRatings(metaData.ratings));
  },[reviewData])

  return (
    <ShowingResults>
      <div className="sort-by">{`Showing ${reviewsShown ? reviewsShown : 2} of ${numberReviews} reviews`}</div>
    </ShowingResults>
  );

}