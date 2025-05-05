import { useState } from "react";
import "../styles/Game.css";
import Image from "./Image";

function Game({ score, setScore, highScore, setHighScore, setMessage }) {
  const [guesses, setGuesses] = useState([]);

  function handleClick(e) {
    setMessage("");

    if (checkGuess(e.target.textContent, guesses)) {
      setGuesses([...guesses, e.target.textContent]);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
    } else {
      setScore(0);
      setGuesses([]);
      setMessage("Game over, click on an image to start over.");
    }
  }

  return (
    <div className="game">
      <Image image={null} name={"test"} onClick={handleClick} />
      <Image image={null} name={"other"} onClick={handleClick} />
    </div>
  );
}

function checkGuess(value, guesses) {
  let validGuess = true;

  for (const guess of guesses) {
    if (guess === value) {
      validGuess = false;
      break;
    }
  }

  return validGuess;
}

export default Game;
