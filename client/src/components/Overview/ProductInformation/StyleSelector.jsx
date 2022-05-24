import React, {useState, useEffect} from 'react';
import axios from 'axios';

const StyleSelector = ({handleOnClickStyle}) => {
  const [image, setImage] = useState(0);
  const [style, setStyle] = useState([]);

  useEffect(() => {
    let product_id = '40344';
    axios.get('/styles?product_id=' + product_id)
      .then(response => {
        setStyle(response.data.results)
      })
      .catch((err) => {
        console.log('could not access data');
        return;
      })
  }, [])

  return (
    <div className='style-selector'>
      {style.map(thumbnail =>
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