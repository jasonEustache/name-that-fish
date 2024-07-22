import "./styles/final-score.css";

export const FunctionalFinalScore = (props) => {
  const correct = props.result.increase;
  const incorrect = props.result.decrease;

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correct}</p>
        <hr />
        <p>{incorrect}</p>
      </div>
    </div>
  );
};
