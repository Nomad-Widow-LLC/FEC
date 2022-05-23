import React, {useState, useContext, createContext, useEffect} from 'react';
import styled from 'styled-components';

const PhotoFlex = styled.div`
  margin: 2px;
`

export default function ReviewPhotos ({photo}) {
  return(
    <PhotoFlex>
      <div className="photo-entry">
        <img src={photo.url} alt={photo.id} width="75" height="auto" ></img>
      </div>
    </PhotoFlex>
  );
};