import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const total = increment + decrement;
  const gameOver = total !== 4;

  return gameOver ? (
    <>
      <FunctionalScoreBoard
        result={{
          increase: [increment, setIncrement],
          decrease: [decrement, setDecrement],
        }}
      />
      <FunctionalGameBoard
        result={{
          increase: [increment, setIncrement],
          decrease: [decrement, setDecrement],
        }}
      />
    </>
  ) : (
    <>
      <FunctionalFinalScore
        result={{
          increase: [increment, setIncrement],
          decrease: [decrement, setDecrement],
        }}
      />
    </>
  );
}
