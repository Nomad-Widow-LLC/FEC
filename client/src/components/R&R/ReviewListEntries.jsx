import React, {useState, useContext, createContext, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import Star from '../Overview/ProductInformation/Star.jsx';
import styled from 'styled-components';

const IndvReview = styled.div`
  display: flex;
  flex-direction: column;
  border-style: groove;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  font: Helvetica;
  font-size: 12px;
  margin: 2.5px;
`

const HeaderReviews = styled.div`
  display: flex;
  flex-direction: row;
`

const Username = styled.div`
  font-size: 16px;
  text-align: left;
  color: black;
  padding: 5px 5px 2px;
  flex-grow: 2;
`
const DateReviewed = styled.div`
  font-size: 10px;
  align-self: center;
  padding-right: 5px;
  font-style: italic;
  opacity: 0.6;

`
const IndvStarRating = styled.div`
  padding-left: 10px;
  font-size: 10px;
  opacity: 0.6;
`

export default function ReviewListEntries ({review}) {








  return (
    <div className="review-list-entry">
    <IndvReview>
      <HeaderReviews>
        <Username>
          <div className="reviewer-name">{review.reviewer_name}</div>
        </Username>
        <DateReviewed>
          <div className="date-reviewed">{format(parseISO(review.date), 'PPP')}</div>
        </DateReviewed>
      </HeaderReviews>

      <IndvStarRating>
        <span className='starRating'>
          {[1,2,3,4,5].map((index) => {
            return (
              <Star index={index} rating={review.rating} key={index}/>
            )
          })}
        </span>
      </IndvStarRating>

      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      <div className="review-photos">
        {review.photos.map((entry, index) => {
          return <img key={index} src={entry.url} alt={entry.id} width="100" height="100"></img>
        })}
      </div>
      {review.recommend ?
      <>
      <div className="is-recommended">I recommend this product</div>
      <div className="recommended-icon">Rec icon here</div>
      </>
      : <div className="not-recommended"></div>}
    </IndvReview>

    </div>
  );
}