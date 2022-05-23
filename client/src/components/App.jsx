import React from "react";
// import { hot } from 'react-hot-loader/root';
import ProductInfo from "./Overview/ProductInformation/ProductInfo.jsx"
import Carousel from "./Overview/ImageGallery/Carousel.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';



class App extends React.Component {
  render() {
   // const { name } = 'Robert';
    return (
      <>
        < ProductInfo />
        < Carousel />
        {/* <ReviewWidget /> */}
     </>
    );
  }
}

export default App = App;
// export default hot(App);