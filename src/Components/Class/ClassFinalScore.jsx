import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    const correctCount = this.props.score[0];
    const total = this.props.score[2];
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{total}</p>
        </div>
      </div>
    );
  }
}
