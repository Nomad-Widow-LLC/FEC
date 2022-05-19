import React from "react";


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
      <ul>
        Q: {this.state.indvQuestion}
      </ul>
    )
  }
}

export default IndividualQuestion = IndividualQuestion;