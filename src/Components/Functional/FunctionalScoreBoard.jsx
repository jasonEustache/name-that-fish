import "./styles/score-board.css";

export function FunctionalScoreBoard(props) {
  const answers = ["trout", "salmon", "tuna", "shark"];
  const increase = props.result.increase[0];
  const decrease = props.result.decrease[0];
  const total = props.result.total;
  const answersLeft = answers.slice(total);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {decrease}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {increase}</div>
    </div>
  );
}
