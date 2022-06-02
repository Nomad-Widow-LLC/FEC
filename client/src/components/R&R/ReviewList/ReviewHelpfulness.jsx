import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
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





export default function ReviewHelpfulness({helpful, reviewID}) {

  const [feedback, setFeedback] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);



  const handleThumbsUp = () => {
    console.log('You gave this a thumbs up! Review ID: ', reviewID);
    //send axios post request to update helpfulness

    axios.put('/review', {reviewID: reviewID})
      .then(() => {console.log('Successful Put Request')})
      .catch(err => console.log(err))
    //update number

    setFeedback(true);
    // setThumbsUp(!thumbsUp);
  }


  return (
    <div className="helpfulness-review">
      <HelpfulStyle>
        <div>Was this review helpful?</div>
        {feedback ? <ThumbsUpClicked><FaRegThumbsUp /></ThumbsUpClicked> : <ThumbsUpNotClicked><FaRegThumbsUp onClick={handleThumbsUp}/></ThumbsUpNotClicked>}
        {feedback ? <div className="number-helpful">{helpful + 1}</div>: <div className="number-helpful">{helpful}</div>}
        {/* <ThumbsDownNotClicked>
          <FaRegThumbsDown onClick={handleThumbsDown}/>
        </ThumbsDownNotClicked> */}

      </HelpfulStyle>
    </div>
  );
}