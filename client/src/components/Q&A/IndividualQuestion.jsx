import React from "react";
import AnswersList from "./AnswersList.jsx";


class IndividualQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indvQuestion: this.props.question.question_body,
      answers: this.props.question.answers
    }
  }

  render() {
    return (
      <>
        <ul>
          Q: {this.state.indvQuestion}
        </ul>
        <ul>
          A: <AnswersList
          answers={this.state.answers}
          // key={}
          />
        </ul>

        Was this helpful?
        <button>Yes</button>
      </>
    )
  }
}

export default IndividualQuestion = IndividualQuestion;