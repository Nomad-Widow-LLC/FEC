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
  const [homepage, setHomepage] = useState(false);
  const [productPics, setProductPics] = useState('');

  // Going to set this as a universal value that can be changed anywhere see AllProduct.Provider,
  // Assumption that product 40344 will be default
  const [productIDN, setProductIDN] = useState('40344');

  useEffect(() => {
    axios.get('/products')
    .then((response) => {
      console.log('does it hit this line?', response.data)
    })
    .catch((err) => {
      console.log('could not access all products')
      return;
    })
  },[])

  const handleRenderHomePage = () => {
    setHomepage(true);
  }

  const getAllProducts = (products) => {
    console.log('PRODUCTS',products);
    setProductPics(products);
  }

  return (
    <>
      <AllProductInfo.Provider value={{productIDN, setProductIDN}}>
        {homepage ? <Homepage productPics={productPics}/> :
        <div>
          <HomeButton handleRenderHomePage={handleRenderHomePage}/>
          <ProductInfo getAllProducts={getAllProducts}/>
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
