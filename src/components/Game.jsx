import { useState } from "react";
import "../styles/Game.css";

function Game({ score, setScore, highScore, setHighScore, setMessage }) {
  const [guesses, setGuesses] = useState([]);

  function handleClick(e) {
    // TODO add function to check if the guess was already made and handle that

    setGuesses([...guesses, e.value]);
    setScore((score) => (score += 1));
    if (score > highScore) {
      setHighScore(score);
    }
  }

  return (
    <div className="game"></div>
  );
}

export default Game;
