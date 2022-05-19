import React from "react";

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: this.props.answers
    }
  }

  render() {
    console.log(this.state.answers)
    return(
      <>
        answussy
      </>
    )
  }
}

export default AnswersList = AnswersList;