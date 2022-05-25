import React, {useState, useEffect} from 'react';
import axios from 'axios';

const StyleSelector = ({handleOnClickStyle, styleSelector}) => {
  const [image, setImage] = useState(0);

  return (
    <div className='style-selector'>
      {styleSelector.map(thumbnail =>
        <img
          className='style-thumbnail'
          src={thumbnail.photos?.[0].thumbnail_url}
          key={thumbnail.photos?.[0].thumbnail_url}
          onClick={()=>{handleOnClickStyle(thumbnail)}}
        />
      )}
    </div>
  )
}

export default StyleSelector;