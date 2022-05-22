import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

const ReviewBodyItem = styled.div`
  font-size: 12px;
  padding: 5px;
`

const ShowHide = styled.div`
  font-style: italic;
  color: grey;
  opacity: 0.6;
  cursor: pointer;
`

export default function ReviewBody ({body}) {

  const [bodyReviewlength, setBodyReviewlength] = useState(body.length);
  const [fullBodyReview, setFullBodyReview] = useState(false);

  const handleBody = () => {
    setFullBodyReview(!fullBodyReview);
  }


  return (
    <ReviewBodyItem>
    {(bodyReviewlength < 250) ? <div className="review-body">{body}</div> :
      (fullBodyReview ?
        <>
          <div className="review-body">{body}</div>
          <ShowHide>
            <div onClick={handleBody}>hide...</div>
          </ShowHide>
        </> :
        <>
          <div className="review-body">{body.slice(0, 250)}...</div>
          <ShowHide>
            <div onClick={handleBody}>Show more...</div>
          </ShowHide>
        </>
      )
    }
    </ReviewBodyItem>
  );
}
