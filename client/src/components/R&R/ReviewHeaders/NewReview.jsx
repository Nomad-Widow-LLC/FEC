import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewReviewForm from './NewReviewForm.jsx';


const ReviewButtonItem = styled.button`
  font-size: 14px;
  font-family: "Courier New", Monaco, "Lucida Console";
  color: white;
  margin: 1em;
  padding: 5px 20px;
  border-radius: 3px;
  background-color: black;
`
const Style = styled.div`

`

export default function NewReview () {

  const [openReviewForm, setOpenReviewForm] = useState(false);




  return(
    <div className="new-review">
      <ReviewButtonItem onClick={() => {setOpenReviewForm(!openReviewForm)}}>Write A Review</ReviewButtonItem>
      <NewReviewForm open={openReviewForm}/>
    </div>
  );

}