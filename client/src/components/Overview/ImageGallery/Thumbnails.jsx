import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FaCheck} from 'react-icons/fa';

const Thumbnails = ({photos, handleChoosingPic,hideCheckmark, styles}) => {
  console.log('photos',photos);
  console.log('styles',styles)
  return (
    <div className='thumbnails'>
    {photos?.map(photo =>
      <div className='thumbnail-container-zoom'>
        <img
          className='style-thumbnail-zoom'
          src={photo.thumbnail_url}
          key={photo.thumbnail_url}
          onClick={()=>{handleChoosingPic(photo)}}
        />
        <div className={`overlay-thumbnail ${hideCheckmark(photo)}`} >
          <FaCheck/> </div>
      </div>
    )}
  </div>
  )
}

export default Thumbnails;