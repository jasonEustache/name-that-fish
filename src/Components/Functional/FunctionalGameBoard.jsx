import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

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

export function FunctionalGameBoard(props) {
  const increase = props.result.increase;
  const decrease = props.result.decrease;
  const [fishTracker, setFishTracker] = useState(0);
  const [inputValue, setInput] = useState("");
  const nextFishToName = initialFishes[fishTracker];

  const isThisTheRightFish = fishes[fishTracker] === inputValue;

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setFishTracker(fishTracker + 1);
      if (isThisTheRightFish) {
        setInput("");
        increase[1](increase[0] + 1);
      } else {
        setInput("");
        decrease[1](decrease[0] + 1);
      }
    }
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleOnSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          name="fish-guess"
        />
        <input type="submit" onSubmit={handleOnSubmit} />
      </form>
    </div>
  );
}
