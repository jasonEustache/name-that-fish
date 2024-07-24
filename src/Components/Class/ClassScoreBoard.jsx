import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const answers = ["trout", "salmon", "tuna", "shark"];
    const total = this.props.score[2];
    const answersLeft = answers.slice(total);
    const incorrectCount = this.props.score[1];
    const correctCount = this.props.score[0];

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
