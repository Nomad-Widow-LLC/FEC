import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FaCheck} from 'react-icons/fa';

const Thumbnails = ({photos, handleChoosingPic,hideCheckmark}) => {

  return (
    <div className='thumbnails-outer'>
    {photos?.map(photo =>
      <div className='thumbnail-container-outer'>
        <img
          className='style-thumbnail-zoom-outer'
          src={photo.thumbnail_url}
          key={photo.thumbnail_url}
          onClick={()=>{handleChoosingPic(photo)}}
        />
        <div className={`overlay-thumbnail-outer ${hideCheckmark(photo)}`} >
          <FaCheck/> </div>
      </div>
    )}
  </div>
  )
}

export default Thumbnails;