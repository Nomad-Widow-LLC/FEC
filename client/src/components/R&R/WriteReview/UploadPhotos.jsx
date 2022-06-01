import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

import {AllReviewForm} from './NewReviewForm.jsx';

const UploadPhotoHeader = styled.h4`
`

export default function UploadPhotos () {


  return (
    <>
      <UploadPhotoHeader>Upload Your Photos Here (Optional, 5 Max)</UploadPhotoHeader>
      <input type="file" id="myFile" name="filename" accept="image/png, image/jpeg"/>
    </>
  );
};
