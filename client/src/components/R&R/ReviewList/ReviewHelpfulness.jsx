import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa';
// import {AllReviews} from '../ReviewWidget.jsx';
const HelpfulStyle = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 0.8;
  font-style: italic;
  font-size: 10px;
  margin: 10px 0px;
`

const ThumbsUpNotClicked = styled.div`
  color: green;
  opacity: 0.6;
  font-size: 10px;
  margin: 0px 10px;
  cursor: pointer;
  &:hover {
    opacity: 1.0;
  }
`
const ThumbsDownNotClicked = styled.div`
  color: red;
  opacity: 0.6;
  font-size: 10px;
  margin: 0px 10px;
  cursor: pointer;
  &:hover {
    opacity: 1.0;
  }
`
const ThumbsUpClicked = styled.div`
  color: green;
  opacity: 1.0;
  font-size: 10px;
  margin: 0px 10px;
  cursor: pointer;
`
const ThumbsDownClicked = styled.div`
  color: red;
  opacity: 1.0;
  font-size: 10px;
  margin: 0px 10px;
  cursor: pointer;
`





export default function ReviewHelpfulness({helpful}) {

  const [feedback, setFeedback] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);



  const handleThumbsUp = () => {
    console.log('You gave this a thumbs up!');
    //send axios post request to update helpfulness
    //update number
    setReviewHelpful(helpful + 1);
    setFeedback(true);

    // logic would be to check if setFeedback is true, if so, do not set axios post request to update number
    // Q is there a way to send post request to reduce the number? if so we can incorp that logic
    setThumbsUp(!thumbsUp);
  }

  const handleThumbsDown = () => {
    console.log('You gave this a thumbs down!');
    //send axios post request to update helfulness
    // There's no data for handling thumbs down...

    setFeedback(true);
    setThumbsDown(!thumbsDown);
  }

  return (
    <div className="helpfulness-review">
      <HelpfulStyle>
        <div>Was this review helpful?</div>
        {/* {(feedback ?
          ((thumbsUp ?
            <ThumbsUpClicked>
              <FaRegThumbsUp onClick={handleThumbsUp}/>
            </ThumbsUpClicked> :
            <ThumbsUpNotClicked>
              <FaRegThumbsUp onClick={handleThumbsUp}/>
            </ThumbsUpNotClicked>)
          <div className="number-helpful">{helpful}</div>
          (thumbsDown ?
            <ThumbsDownClicked>
              <FaRegThumbsDown />
            </ThumbsDownClicked> :
            <ThumbsDownNotClicked>
              <FaRegThumbsDown />
            </ThumbsDownNotClicked>)) :
            <ThumbsUpNotClicked>
              <FaRegThumbsUp onClick={handleThumbsUp}/>
            </ThumbsUpNotClicked>
            <div className="number-helpful">{helpful}</div>
            <ThumbsDownNotClicked>
              <FaRegThumbsDown onClick={handleThumbsDown}/>
            </ThumbsDownNotClicked>)
        } */}

        <ThumbsUpNotClicked>
              <FaRegThumbsUp onClick={handleThumbsUp}/>
        </ThumbsUpNotClicked>
        <div className="number-helpful">{helpful}</div>
        <ThumbsDownNotClicked>
          <FaRegThumbsDown onClick={handleThumbsDown}/>
        </ThumbsDownNotClicked>

      </HelpfulStyle>
    </div>
  );
}