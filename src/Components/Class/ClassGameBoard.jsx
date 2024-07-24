import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

const fishes = initialFishes.map((fish) => {
  return fish.name;
});

export class ClassGameBoard extends Component {
  render() {
    const correct = this.props.score.correctCount;
    const incorrect = this.props.score.incorrectCount;
    const total = correct + incorrect;
    const isThisTheRightFish = fishes[total] === this.props.score.fishName;

    const handleUserTextInput = (e) => {
      this.props.update({ fishName: e.target.value.toLowerCase() });
    };

    const handleUserSubmit = (e) => {
      this.props.update({ fishName: "" });
      e.preventDefault();
      if (isThisTheRightFish) {
        this.props.update({ correctCount: correct + 1 });
      } else {
        this.props.update({ incorrectCount: incorrect + 1 });
      }
    };

    const nextFishToName = initialFishes[total];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={handleUserSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.props.score.fishName}
            onChange={handleUserTextInput}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
