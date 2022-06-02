import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import imgBBToken from '../../../../dist/imgbb.js';

import {AllReviewForm} from './NewReviewForm.jsx';

const UploadPhotoHeader = styled.h3`
  margin: 1em 0px 1em 5px;
  text-decoration: underline;
  margin-bottom: 25px;
`
const PhotoAlbum = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  height: auto;

  gap: 10px;
`

const PhotoImg = styled.div`

`

export default function UploadPhotos () {

  const {photos, setPhotos, photoCount, setPhotoCount} = useContext(AllReviewForm);


  const uploadPhoto = (e) => {
    // console.log(e.target.files);
    let URLs = Object.values(e.target.files).slice(0, 5);

    const uploadAllPhotos = (photos) => {
      return Promise.all(photos.map(photo => uploadImage(photo)));
    }

    const uploadImage = (photo) => {
      let body = new FormData();
      body.set('key', imgBBToken);
      body.append('image', photo);

      return axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body
      });
    };


    uploadAllPhotos(URLs)
      .then(resp => {
        let temp = [];
        for (let i = 0; i < resp.length; i++) {
          temp.push(resp[i].data.data.url);
        }
        setPhotos(temp);
      })

  };



  return (
    <>
      <UploadPhotoHeader>Upload Your Photos Here (Optional, 5 Max):</UploadPhotoHeader>
        <PhotoAlbum>
          {photos.length > 0 ? <><img src={photos[0]} alt="Photo1" width="100" height="auto"/><br></br></> : <div></div>}
          {photos.length > 1 ? <><img src={photos[1]} alt="Photo2" width="100" height="auto"/><br></br></> : <div></div>}
          {photos.length > 2 ? <><img src={photos[2]} alt="Photo3" width="100" height="auto"/><br></br></> : <div></div>}
          {photos.length > 3 ? <><img src={photos[3]} alt="Photo4" width="100" height="auto"/><br></br></> : <div></div>}
          {photos.length > 4 ? <><img src={photos[4]} alt="Photo5" width="100" height="auto"/><br></br></> : <div></div>}
        </PhotoAlbum>

      <input type="file" id="myFile" name="filename" accept="image/png, image/jpeg" onChange={(e) => uploadPhoto(e)} multiple/>
    </>
  );
};
