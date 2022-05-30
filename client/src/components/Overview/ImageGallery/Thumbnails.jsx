import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Thumbnails = ({photos, handleChoosingPic}) => {
  console.log('does it hit here?', photos)
  return (
    <div className='thumbnails'>
    {photos?.map(photo =>
      <div className='thumbnail-container'>
        <img
          className='style-thumbnail-zoom'
          src={photo.thumbnail_url}
          key={photo.thumbnail_url}
          onClick={()=>{handleChoosingPic(photo)}}
        />
      </div>
    )}
  </div>
  )
}

export default Thumbnails;