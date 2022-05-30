import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';
import Carousel from "../ImageGallery/Carousel.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import axios from 'axios';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ProductInfo = () => {
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState([]);
  const [styleSelector, setStyleSelector] = useState([]);
  const [size, setSize] = useState('Select Size');
  const [quantity, setQuantity] = useState(0);
  const [allQuantity, setAllQuantity] = useState(true);
  const [sizeSelected, setSizeSelected] = useState(false);

  const handleOnClickStyle = (thumbnail) => {
    console.log('current style', thumbnail);
    setSize('Select Size');
    setStyle(thumbnail);
  }

  const handleChoosingSize = (size) => {
    setSizeSelected(true);
    for (let key in style.skus) {
      if (style.skus[key].size === size) {
        console.log('quantity',style.skus);
        setQuantity(style.skus[key].quantity);
      }
    }
    setSize(size);
  }

  useEffect(() => {
    let product_id = '40344'
    axios.get('/product?product_id=' + product_id)
      .then((response) => {
        setProduct(response.data)
      })
      .then (() => {
        return axios.get('/review?product_id=' + product_id)
      })
      .then( (response) => {
        let sumRating = 0;
        let results = response.data.results
        for (let i = 0; i < results.length; i++) {
          sumRating += results[i].rating;
        }
        let avgRating = sumRating/results.length;
        setReviewNum(results.length);
        return avgRating;
      })
      .then((avgRating) => {
        setRating(avgRating);
      })
      .then(() => {
         return axios.get('/styles?product_id=' + product_id)
      })
      .then((response) => {
        let quantity = 0;
        let skus = response.data.results[0].skus;
        for(let sku in skus) {
          quantity += skus[sku].quantity;
        }
        if(quantity <= 0) {
          setAllQuantity(false);
        }
        console.log('results', response.data.results[0].photos);
        console.log('style that goes into Carousel', response.data.results[0])
        setStyle(response.data.results[0]);
        setStyleSelector(response.data.results);
      })
      .catch((err) => {
        console.log('could not access data');
        return;
      })
  }, [])

  return (
    <div className='productAndImage'>
        <Carousel style={style} handleOnClickStyle={handleOnClickStyle}/>
        <div className='ProductInfo'>
          <StarRating rating={rating} reviewNum={reviewNum}/>
          <h6 className='ProductCategory'>{product.category}</h6>
          <h3 className='ProductTitle'>{product.name}</h3>
          { style.sale_price ? <span className="priceContainer">
            <span className="sale-price">${style.sale_price}</span>
            <span className="spacer">&nbsp;</span>
            <span className="price">${style.original_price}</span>
          </span>  : <span className="original-price">${style.original_price}</span> }
          <h6 className='ProductOverview'>{product.description}</h6>
          <h6 className='SocialMedia'>Share on Social Media</h6>
          <span className='social-media-icons'>
            <a className='social-icon' href="https://www.youtube.com"><FaYoutube/></a>
            <a className='social-icon' href="https://www.facebook.com"><FaFacebook/></a>
            <a className='social-icon' href="https://www.twitter.com"><FaTwitter/></a>
            <a className='social-icon' href="https://www.instagram.com"><FaInstagram/></a>
          </span>
          <h6 className='style-name'>{style.name}</h6>
          <StyleSelector handleOnClickStyle={handleOnClickStyle} styleSelector={styleSelector} style={style} setSize={setSize}/>
          <AddToCart style={style} size={size} setSize={setSize} handleChoosingSize={handleChoosingSize} quantity={quantity} allQuantity={allQuantity} sizeSelected={sizeSelected}/>
      </div>
    </div>
  )
}

export default ProductInfo;
