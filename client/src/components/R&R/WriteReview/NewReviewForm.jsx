import React, {useState, useContext, createContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import {FaTimes, FaStar} from 'react-icons/fa';


import {AllReviews} from '../ReviewWidget.jsx';
import {AllProductInfo} from '../../App.jsx';

import StarRatingInput from './StarRatingInput.jsx';
import DoYouRecommend from './DoYouRecommend.jsx';
import CharacteristicsInput from './CharacteristicsInput.jsx';
import ReviewSummary from './ReviewSummary.jsx';
import BodySummary from './BodySummary.jsx';
import UploadPhotos from './UploadPhotos.jsx';
import SetNickname from './SetNickname.jsx';
import EmailInput from './EmailInput.jsx';


export const AllReviewForm = createContext();


const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fafafa;
  padding: 25px;
  zIndex: 1000;
  min-width: 800px;
  max-height: 90%;
  font-family: "Courier New", Monaco, "Lucida Console";
  border-radius: 5px;
`
const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  zIndex: 1000;
`
const Heads = styled.div`
  overflow-y: initial;
  border-width: 0px 0px 2px 0px;
  border-bottom-style: groove;
  border-color: #ff5e5e;

`
const Stys = styled.div`
  height: 75vh;
  overflow-y: auto;
`

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2em;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1.0
  }
`
const Close = styled.div`
  font-size: 0.5em;

`

const H1Styles = styled.h1`
  font-family: "Courier New", Monaco, "Lucida Console";
`

const H2Styles = styled.h2`
  font-family: "Courier New", Monaco, "Lucida Console";
`

export default function NewReviewForm ({open, onClose}) {

  const {productIDN, setProductIDN} = useContext(AllProductInfo);
  const {product, setProduct} = useContext(AllProductInfo);
  const {metaData, setMetaData} = useContext(AllReviews);
  // Export context
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(null);

  const [fitRating, setFitRating] = useState(null);
  const [lengthRating, setLengthRating] = useState(null);
  const [comfortRating, setComfortRating] = useState(null);
  const [qualityRating, setQualityRating] = useState(null);
  const [charsObj, setCharsObj] = useState(null);

  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');

  const [photos, setPhotos] = useState([]);
  const [photoCount, setPhotoCount] = useState(0);

  const [nickname, setNickname] = useState('');

  const [email, setEmail] = useState('');

  useEffect(() => {

    let tempObj = {};
    for (let key in metaData.characteristics) {
      if (key === 'Fit' && fitRating !== null) {
        tempObj[metaData.characteristics.Fit.id] = fitRating;
      } else if (key === 'Length' && lengthRating !== null) {
        tempObj[metaData.characteristics.Length.id] = lengthRating;
      } else if (key === 'Comfort' && comfortRating !== null) {
        tempObj[metaData.characteristics.Comfort.id] = comfortRating;
      } else if (key === 'Quality' && qualityRating !== null) {
        tempObj[metaData.characteristics.Quality.id] = qualityRating;
      } else {

      }
    }
    setCharsObj(tempObj);

  }, [metaData, fitRating, lengthRating, comfortRating, qualityRating])

  useEffect(() => {
    if (open === false) {
      setRating(null);
      setFitRating(null);
      setLengthRating(null);
      setComfortRating(null);
      setQualityRating(null);
      setCharsObj(null);
      setRecommended(null);
      setSummary('');
      setBody('');
      setNickname('');
      setEmail('');
      setPhotos([]);
    }

  }, [open])


  const handleFormSubmit = () => {
    event.preventDefault();
    let postObj = {product_id: productIDN,
                  rating: rating,
                  summary: summary,
                  body: body,
                  recommend: recommended,
                  name: nickname,
                  email: email,
                  photos: photos,
                  characteristics: charsObj}
    console.log('Sending Post Request: ', postObj);
    axios.post('/review', postObj)
      .then((res) => {console.log('Post Successful')})
      .catch((err) => {console.log('Post Unsuccessful')})

  }


  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <AllReviewForm.Provider value={{rating, setRating, recommended, setRecommended, fitRating, setFitRating, lengthRating, setLengthRating, comfortRating, setComfortRating, qualityRating, setQualityRating, summary, setSummary, body, setBody, nickname, setNickname, email, setEmail, photos, setPhotos, photoCount, setPhotoCount}}>
        <OverlayStyles>
          <ModalStyles>
          <Heads>
            <H1Styles>Write Your Review</H1Styles>
            <H2Styles>About the {product ? product : 'Product'}</H2Styles>
              <Icon>
                  <Close>close</Close>
                  <FaTimes onClick={onClose}/>
              </Icon>
          </Heads>
              <Stys>
                <form onSubmit={handleFormSubmit}>
                  <StarRatingInput />
                  <DoYouRecommend />
                  <CharacteristicsInput />
                  <ReviewSummary />
                  <BodySummary />
                  <UploadPhotos />
                  <SetNickname />
                  <EmailInput />
                  <input type="submit"/>
                </form>
              </Stys>
          </ModalStyles>
        </OverlayStyles>
      </AllReviewForm.Provider>

    </>,
    document.getElementById('form-portal')
  );
}
