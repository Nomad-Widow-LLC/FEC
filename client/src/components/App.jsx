import React from "react";
// import { hot } from 'react-hot-loader/root';
import QuestionsList from "./Q&A/QuestionsList.jsx";
import StarRating from "./Overview/ProductInformation/StarRating.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';



class App extends React.Component {
  render() {
   // const { name } = 'Robert';
    return (
      <>
        <h1>
          Hello Robert
        </h1>
        <QuestionsList />
        <ReviewWidget />
        < StarRating />
        {/* <ReviewWidget /> */}
     </>
    );
  }
}

export default App = App;
// export default hot(App);