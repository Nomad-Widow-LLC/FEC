import React from "react";

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: this.props.answers,
      answer_body: ''
    }
  }

  render() {
    const keys = Object.keys(this.props.answers);
    return(
      <>
        answussy
        {console.log(this.state.answers)}
        <div>
          <button>More Answers...</button>
          <button>Add Answer</button>
        </div>
      </>
    )
  }
}

export default AnswersList = AnswersList;