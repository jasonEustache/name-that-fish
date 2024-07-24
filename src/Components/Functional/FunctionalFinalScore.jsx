import "./styles/final-score.css";

export const FunctionalFinalScore = (props) => {
  const correct = props.result.increase[0];
  const total = props.result.total;

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correct}</p>
        <hr />
        <p>{total}</p>
      </div>
    </div>
  );
};
