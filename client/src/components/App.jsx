import React from "react";
// import { hot } from 'react-hot-loader/root';
import StarRating from "./Overview/ProductInformation/StarRating.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';
import Card from './components/Card.jsx';



class App extends React.Component {
  render() {
   // const { name } = 'Robert';
    return (
      <>
        < StarRating />
        <Card />
        {/* <ReviewWidget /> */}

     </>
    );
  }
}

export default App = App;