import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const total = increment + decrement;
  const gameOver = total !== 4;
  const result = {
    increase: [increment, setIncrement],
    decrease: [decrement, setDecrement],
    total: total,
  };
  return gameOver ? (
    <>
      <FunctionalScoreBoard result={result} />
      <FunctionalGameBoard result={result} />
    </>
  ) : (
    <>
      <FunctionalFinalScore result={result} />
    </>
  );
}
