import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard(props) {
  const increase = props.result.increase;
  const decrease = props.result.decrease;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {decrease[0]}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {increase[0]}</div>
    </div>
  );
}
