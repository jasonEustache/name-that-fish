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
  state = {};

  render() {
    const correct = this.props.state.correctCount;
    const incorrect = this.props.state.incorrectCount;
    const total = correct + incorrect;
    const isThisTheRightFish = fishes.includes(this.props.state.fishName);

    const handleUserTextInput = (e) => {
      this.props.setState({ fishName: e.target.value });
    };

    const handleUserSubmit = (e) => {
      e.preventDefault();
      if (isThisTheRightFish) {
        this.props.setState({ correctCount: correct + 1 });
      } else {
        this.props.setState({ incorrectCount: incorrect + 1 });
      }
      this.props.setState({ fishName: "" });
    };

    const nextFishToName = initialFishes[total];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={handleUserSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" onChange={handleUserTextInput} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
