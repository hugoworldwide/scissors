
import './App.css';
import ChoiceCard from './components/ChoiceCard'
import List from './components/List'
import React, { useState } from "react";




export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};


export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};

export const getRandomChoice = () => {
  let choiceNames = Object.keys(CHOICES); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
  let choiceName = choiceNames[randomIndex];
  return CHOICES[choiceName];
};


const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};



function App() {
  const [playerChoice, setPlayerChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [prompt, setGamePrompt] = useState("Hugo!");
  const [previousWinner, setPreviousWinner] = useState(null);


  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    console.log(result, compChoice)

    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];

    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    if (result === "Victory!") {
      console.log("im here")
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }

  };
  console.log(playerChoice, computerChoice)

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">

            <ChoiceCard title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url} />
            <h1>{prompt}</h1>
            <button
              className="btn btn-success btn-lg"
              onClick={() => onPlayerChoose("rock")}
            >
              Rock
  </button>
            <button
              className="btn btn-success btn-lg"
              onClick={() => onPlayerChoose("paper")}>
              Paper
  </button>
            <button
              className="btn btn-success btn-lg"
              onClick={() => onPlayerChoose("scissors")}
            >
              Scissors
  </button>
            <ChoiceCard title="Computer"
              previousWinner={previousWinner}

              imgURL={computerChoice && computerChoice.url} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

