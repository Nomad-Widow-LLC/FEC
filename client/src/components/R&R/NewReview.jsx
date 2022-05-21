import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ReviewButtonItem = styled.button`
  font-size: 14px;
  font-family: "Courier New", Monaco, "Lucida Console";
  color: white;
  margin: 1em;
  padding: 5px 20px;
  border-radius: 3px;
  background-color: black;
`


export default function NewReview () {

  const [writeReview, setWriteReview] = useState(false);


  const handleClick = () => {
    setWriteReview(!writeReview);
  }


  return(
    <div className="new-review">
      <ReviewButtonItem
      onClick={handleClick}
      >Write A Review
        {/* <input
          type="button"
          value="Write A Review"
          onClick={handleClick}
        /> */}

      </ReviewButtonItem>
    </div>
  );

}