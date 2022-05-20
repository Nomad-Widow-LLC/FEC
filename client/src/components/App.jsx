import React from "react";
import Card from "./Related/Card.jsx";
// import { hot } from 'react-hot-loader/root';
import StarRating from "./Overview/ProductInformation/StarRating.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';



class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          Hello Robert
        </h1>
        <Card />
      </>
     <ReviewWidget />
        < StarRating />
        {/* <ReviewWidget /> */}
     </>
    );
  }
}

export default App = App;