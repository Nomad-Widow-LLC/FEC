import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StarRating from '../../Overview/ProductInformation/StarRating.jsx';
import BarPercentage from './BarPercentage.jsx';
import useGetAvgRatings from '../GetData/useGetAvgRatings.js';
import useGetRatingBreakdown from '../GetData/useGetRatingBreakdown.js';
import {AllReviews} from '../ReviewWidget.jsx';


const OverallRatingContainer = styled.div`
  margin: 10px 10px;
  align-items: flex-end;
  border-style: groove;
  border-width: 1px;
  border-color: grey;
  box-shadow: 1px 1px grey;
`

const OverallHeader = styled.div`
  display: flex;
  flex-direction: row;
`

const OverallRatingNumber = styled.div`
  font-size: 1.5em;
  margin: 0px 5px;
`

const BreakdownStyles = styled.div`
  display: flex;
  flex-direction: column;
`

export default function OverallRating () {

  const {metaData, setMetaData} = useContext(AllReviews);
  const [sumRating, setSumRating] = useState(useGetAvgRatings(metaData.ratings));
  const [breakdown, setBreakdown] = useState(useGetRatingBreakdown(metaData.ratings));

  return (
    <>
      <OverallRatingContainer>
      <OverallHeader>
        <OverallRatingNumber>
          <div>{sumRating.toFixed(1)}</div>
        </OverallRatingNumber>
        <StarRating rating={sumRating} reviewNum={null}/>
      </OverallHeader>
        {/* {['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'].map((text, index) => {
          return <div>{text}</div>
        })} */}
        <BreakdownStyles>
          {breakdown.map((ratio, index) => {
            return (<BarPercentage key={index} ratio={ratio} star={5- index}/>)
          })}
        </BreakdownStyles>
      </OverallRatingContainer>
    </>
  );


};