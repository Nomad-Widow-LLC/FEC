import React, {useState, useContext, createContext, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import styled from 'styled-components';
import {FaUserCircle, FaCheck} from 'react-icons/fa';

import StarRating from '../../Overview/ProductInformation/StarRating.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import ReviewHelpfulness from './ReviewHelpfulness.jsx';
import ReviewResponse from './ReviewResponse.jsx';


const IndvReview = styled.div`
  display: flex;
  flex-direction: column;
  border-style: groove;
  border-width: 1px;
  border-color: #ff5e5e;
  border-radius: 1px;
  box-shadow: 1px 1px grey;
  font: Helvetica;
  font-size: 12px;
  margin: 2.5px;
  padding-left: 1.5em;
  margin-right: 1em;
  max-width: 90%;
  min-width: 600px;
  max-height: auto;
  min-height: 175px;
`

const HeaderReviews = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const UserCircleIcon = styled.div`
  font-size: 24px;
  opacity: 0.8;
  margin-top: 5px;
  margin-left: -5px;
`
const Username = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: black;
  padding: 5px 5px 2px;
  flex-grow: 2;
`
const Recommended = styled.div`
  font-size: 9px;
  opacity: 0.7;
  font-style: italic;
  padding-right: 0.5em;
`
const Checkmark = styled.div`
  padding-right: 2em;
  color: green;
  opacity: 0.75;
`
const DateReviewed = styled.div`
  font-size: 9px;
  align-self: left;
  margin: -9px 0px 5px 24px;
  font-style: italic;
  opacity: 0.7;

`
const IndvStarRating = styled.div`
  padding-top: 0.5em;
  font-size: 10px;
  opacity: 0.6;
  max-height: 4.5em;
`

const ReviewSummary = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 0px;
  position: relative;
  bottom: 2em;
`
const PhotoItem = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`


export default function ReviewListEntries ({review}) {

  const [helpful, setHelpful] = useState(false);




  return (
    <IndvReview>
    <div className="review-list-entry">
      <HeaderReviews>

        <UserCircleIcon>
          <FaUserCircle />
        </UserCircleIcon>

        <Username>
          <div className="reviewer-name">{review.reviewer_name}</div>
        </Username>

          {review.recommend ?
          <>
          <Recommended>
            <div className="is-recommended">I recommend this product</div>
          </Recommended>
          <Checkmark>
            <FaCheck />
          </Checkmark>
          </>
          : <div className="not-recommended"></div>}

      </HeaderReviews>

      <DateReviewed>
        <div className="date-reviewed">Reviewed On: {format(parseISO(review.date), 'PPP')}</div>
      </DateReviewed>

      <IndvStarRating>
        <StarRating rating={review.rating} reviewNum={null}/>
      </IndvStarRating>

      <ReviewSummary>
        <div className="review-summary">{review.summary}</div>
      </ReviewSummary>

      <ReviewBody body={review.body} />

      <PhotoItem>
        {review.photos.map((photo, index) => {
          return <ReviewPhotos key={index} photo={photo}/>
        })}
      </PhotoItem>

      {review.response ? <ReviewResponse response={review.response}/> : <></>}


      <ReviewHelpfulness helpful={review.helpfulness} reviewID={review.review_id}/>


    </div>
    </IndvReview>
  );
}


// Still need to implement the following:
// #1: Star Rating Rerender Issue
// #2: