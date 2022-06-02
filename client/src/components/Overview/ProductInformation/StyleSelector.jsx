import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import {FaCheck} from 'react-icons/fa';

const StyleSelector = ({handleOnClickStyle, styleSelector, style, setSize}) => {
  const [image, setImage] = useState(0);

  const hideCheckmark = (thumbnail)=>{
    if (thumbnail !== style) {
      return 'style-thumbnail'
    } else {
      return 'style-thumbnail-overlay'
    }
  }

  return (
    <div className='style-selector'>
      {styleSelector.map(thumbnail =>
        <div className='thumbnail-container'>
          <img
            className={`${hideCheckmark(thumbnail)}`}
            src={thumbnail.photos?.[0].thumbnail_url}
            key={thumbnail.photos?.[0].thumbnail_url}
            onClick={()=>{handleOnClickStyle(thumbnail)}}
          />
        </div>
      )}
    </div>
  )
}

export default StyleSelector;