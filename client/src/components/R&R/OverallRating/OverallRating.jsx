import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StarRating from '../../Overview/ProductInformation/StarRating.jsx';
import BarPercentage from './BarPercentage.jsx';
import useGetAvgRatings from '../GetData/useGetAvgRatings.js';
import useGetRatingBreakdown from '../GetData/useGetRatingBreakdown.js';
import {AllReviews} from '../ReviewWidget.jsx';
import {AllProductInfo} from '../../App.jsx';


const OverallRatingContainer = styled.div`
  width: 120px;
  margin: 10px 10px;
  align-items: flex-end;
  border-style: groove;
  border-width: 1px;
  border-color: grey;
  box-shadow: 1px 1px grey;
  padding: 10px;
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
const StarRatingItem = styled.div`
  vertical-align: bottom;

`

export default function OverallRating () {

  const {metaData, setMetaData} = useContext(AllReviews);
  const {didSelect, setDidSelect} = useContext(AllReviews);
  const {selectedStars, setSelectedStars} = useContext(AllReviews);
  const [sumRating, setSumRating] = useState(useGetAvgRatings(metaData.ratings));
  const [breakdown, setBreakdown] = useState(useGetRatingBreakdown(metaData.ratings));

  useEffect(() => {
    setSumRating(useGetAvgRatings(metaData.ratings));
    setBreakdown(useGetRatingBreakdown(metaData.ratings));
  }, [metaData])

  return (
    <>
      <OverallRatingContainer>
      <OverallHeader>
        <OverallRatingNumber>
          {sumRating ? <div>{sumRating.toFixed(1)}</div> : <div>N/A</div>}
        </OverallRatingNumber>
        <StarRatingItem>
          <StarRating rating={sumRating} reviewNum={null}/>
        </StarRatingItem>
      </OverallHeader>
        <BreakdownStyles>
          {sumRating ? (breakdown.map((ratio, index) => {
            return (<BarPercentage key={index} ratio={ratio} star={5- index} num={metaData.ratings[''+(5-index)]}/>)
          })) : (breakdown.map((ratio, index) => {
            return (<BarPercentage key={index} ratio={0} star={5- index} num={metaData.ratings[''+(5-index)]}/>)
          }))}
          {}
        </BreakdownStyles>
        {didSelect ? <button onClick={() => {setSelectedStars({})}}>Clear Filters</button> : <></>}
      </OverallRatingContainer>
    </>
  );


};