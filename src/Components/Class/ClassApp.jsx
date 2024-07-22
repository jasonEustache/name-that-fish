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
    const results = [this.state.incorrectCount, this.state.correctCount];
    const gameOver = total === 4;

    return gameOver ? (
      <>
        <ClassFinalScore display={results} />
      </>
    ) : (
      <>
        <ClassScoreBoard display={results} />

        <ClassGameBoard state={this.state} setState={this.update} />
      </>
    );
  }
}
