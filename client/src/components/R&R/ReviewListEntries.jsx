import React, {useState, useContext, createContext, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import Star from '../Overview/ProductInformation/Star.jsx';
import styled from 'styled-components';
import {FaUserCircle, FaCheck} from 'react-icons/fa';


const IndvReview = styled.div`
  display: flex;
  flex-direction: column;
  border-style: groove;
  border-width: 1px;
  border-color: black;
  border-radius: 1px;
  box-shadow: 1px 1px grey;
  font: Helvetica;
  font-size: 12px;
  margin: 2.5px;
  padding-left: 1.5em;
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
`

const ReviewSummary = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 0px;
`
const ReviewBody = styled.div`
  font-size: 12px;
  padding: 5px;
`

const ShowHide = styled.div`
  font-style: italic;
  color: grey;
  opacity: 0.6;
`
export default function ReviewListEntries ({review}) {


  const [bodyReviewlength, setBodyReviewlength] = useState(review.body.length);
  const [fullBodyReview, setFullBodyReview] = useState(false);



  const handleBody = () => {
    event.preventDefault();
    setFullBodyReview(!fullBodyReview);
  }


  return (
    <div className="review-list-entry">
    <IndvReview>
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
        <span className='starRating'>
          {[1,2,3,4,5].map((index) => {
            return (
              <Star index={index} rating={review.rating} key={index}/>
            )
          })}
        </span>
      </IndvStarRating>

      <ReviewSummary>
        <div className="review-summary">{review.summary}</div>
      </ReviewSummary>

      <ReviewBody>
        {(bodyReviewlength < 250) ? <div className="review-body">{review.body}</div> :
          (fullBodyReview ?
            <>
              <div className="review-body">{review.body}</div>
              <ShowHide>
                <div onClick={handleBody}>hide...</div>
              </ShowHide>
            </> :
            <>
              <div className="review-body">{review.body.slice(0, 250)}...</div>
              <ShowHide>
                <div onClick={handleBody}>Show more...</div>
              </ShowHide>
            </>
          )
        }
      </ReviewBody>


      <div className="review-photos">
        {review.photos.map((entry, index) => {
          return <img key={index} src={entry.url} alt={entry.id} width="100" height="100"></img>
        })}
      </div>
    </IndvReview>

    </div>
  );
}


// Still need to implement the following:
// #1: Star Rating Rerender Issue
// #2