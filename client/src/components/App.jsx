import React from "react";
// import { hot } from 'react-hot-loader/root';
import StarRating from "./Overview/ProductInformation/StarRating.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';
import Carousel from './Related/Carousel.jsx';



class App extends React.Component {
  render() {
   // const { name } = 'Robert';
    return (
      <>
        <StarRating />
        <Carousel />
        {/* <ReviewWidget /> */}

     </>
    );
  }
}

export default App = App;