import React, {useState, useContext, createContext, useEffect} from 'react';
import StarRating from "./Overview/ProductInformation/StarRating.jsx"
import axios from 'axios';
// import { hot } from 'react-hot-loader/root';
import ProductInfo from "./Overview/ProductInformation/ProductInfo.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';
import Carousel from './Related/Carousel.jsx';
import HomeButton from './Homepage/HomeButton.jsx';
import Homepage from './Homepage/Homepage.jsx';

export const AllProductInfo = createContext();

export default function App () {
  const [homepage, setHomepage] = useState(true);
  const [productPics, setProductPics] = useState([]);

  // Going to set this as a universal value that can be changed anywhere see AllProduct.Provider,
  // Assumption that product 40344 will be default
  const [productIDN, setProductIDN] = useState(40344);
  const [product, setProduct] = useState('');

  const [numReviews, setNumReviews] = useState();
  useEffect(() => {
    axios.get('/products?count=20')
    .then((results) => {
      let productList = results.data;
      console.log('idList', productList)
      return productList;
    })
    .then(async (productList) => {
      let images = await Promise.all(productList.map((product) => axios.get(`/styles?product_id=${product.id}`)))
      let placeholder = 'https://s3.amazonaws.com/media.thecrimson.com/photos/2022/04/20/122908_1355986.jpg'
      let pictures = [];

      for (let i = 0; i < images.length; i++) {
        let pic = {
          thumbnail_url: '',
          product_id: images[i].data.product_id
        };

        if (images[i].data.results.length === 0) {
          pic.thumbnail_url = placeholder;
        } else if (images[i].data.results[0].photos === undefined) {
          pic.thumbnail_url = placeholder;
        } else if(!images[i].data.results[0].photos[0].thumbnail_url) {
          pic.thumbnail_url = placeholder;
        } else {
          pic.thumbnail_url = images[i].data.results[0].photos[0].thumbnail_url
        }
        pictures.push(pic);
      }
      return pictures;
    })
    .then ((pictures) => {
      setProductPics(pictures);
      return;
    })
  }, [])

  const handleRenderHomePage = () => {
    setHomepage(true);
  }

  const getProduct = (product) => {
    console.log('PRODUCTS',product);
    setProductIDN(product.product_id);
    setHomepage(false);
  }

  return (
    <>
      <AllProductInfo.Provider value={{productIDN, setProductIDN, product, setProduct, numReviews, setNumReviews}}>
        {homepage ? <Homepage productPics={productPics} getProduct={getProduct}/> :
        <div>
          <HomeButton handleRenderHomePage={handleRenderHomePage}/>
          <ProductInfo />
          <div className="componentGap" />
          <Carousel />
          <div className="componentGap" />
          <a id="review-widget"></a>
          <ReviewWidget />
        </div>
        }
      </AllProductInfo.Provider>
    </>
  );
}
