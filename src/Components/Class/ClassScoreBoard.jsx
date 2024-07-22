import { Component } from "react";
import "./styles/score-board.css";

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export class ClassScoreBoard extends Component {
  render() {
    const incorrectCount = this.props.display[1];
    const correctCount = this.props.display[0];

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
