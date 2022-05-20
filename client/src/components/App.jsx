import React from "react";
import Card from "./Related/Card.jsx";
// import { hot } from 'react-hot-loader/root';
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
    );
  }
}

export default App = App;