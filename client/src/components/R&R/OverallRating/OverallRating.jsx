import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StarRating from '../../Overview/ProductInformation/StarRating.jsx';
import useGetAvgRatings from '../GetData/useGetAvgRatings.js';
import {AllReviews} from '../ReviewWidget.jsx';


const OverallRatingContainer = styled.div`
  margin: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-style: groove;
  border-width: 1px;
  border-color: grey;
  box-shadow: 1px 1px grey;
`

const OverallRatingNumber = styled.div`
  font-size: 1.5em;
  margin: 0px 5px;
`

export default function OverallRating () {

  const {metaData, setMetaData} = useContext(AllReviews);
  const [sumRating, setSumRating] = useState(useGetAvgRatings(metaData.ratings));





  return (
    <>
      <OverallRatingContainer>
        <OverallRatingNumber>
          <div>{sumRating.toFixed(1)}</div>
        </OverallRatingNumber>
          <StarRating rating={sumRating} reviewNum={null}/>
      </OverallRatingContainer>
    </>
  );


};