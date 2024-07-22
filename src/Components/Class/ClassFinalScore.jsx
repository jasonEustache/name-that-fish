import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    const correctCount = this.props.display[1];
    const incorrectCount = this.props.display[0];
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{incorrectCount}</p>
        </div>
      </div>
    );
  }
}
