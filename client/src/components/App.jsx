import React from "react";
import StarRating from "./Overview/ProductInformation/StarRating.jsx"
// import { hot } from 'react-hot-loader/root';
import ProductInfo from "./Overview/ProductInformation/ProductInfo.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';
import Carousel from './Related/Carousel.jsx';



class App extends React.Component {
  render() {
   // const { name } = 'Robert';
    return (
      <>
        <div className="componentGap" />
        <ProductInfo />
        <div className="componentGap" />
        <Carousel />
        <div className="componentGap" />
        <ReviewWidget />
        {/* <StarRating /> */}
        {/* <Carousel /> */}
        {/* <ReviewWidget /> */}

     </>
    );
  }
}

export default App = App;