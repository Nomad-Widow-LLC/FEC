// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// const StyleSelector = () => {
//   const [image, setImage] = useState(0);
//   const [style, setStyle] = useState([]);

//   useEffect(() => {
//     let product_id = '40344';
//     axios.get('/styles?product_id=' + product_id)
//       .then(response => {
//         setStyle(response.data.results[0])
//       })
//       .catch((err) => {
//         console.log('could not access data');
//         return;
//       })
//   }, [])

//   return (
//     <div className='style-selector'>
//       {style.photos?.map(thumbnail =>
//       // console.log('thumbnail', thumbnail)
//         <img className='style-thumbnail' src={thumbnail.url} />
//       )}
//     </div>
//   )
// }

// export default StyleSelector;