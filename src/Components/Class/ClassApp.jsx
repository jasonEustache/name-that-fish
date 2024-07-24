import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    fishName: "",
  };
  update = (value) => {
    this.setState(value);
  };

  render() {
    const total = this.state.incorrectCount + this.state.correctCount;
    const gameOver = total === 4;
    const results = [this.state.correctCount, this.state.incorrectCount, total];
    return gameOver ? (
      <>
        <ClassFinalScore score={results} />
      </>
    ) : (
      <>
        <ClassScoreBoard score={results} />
        <ClassGameBoard score={this.state} update={this.update} />
      </>
    );
  }
}
