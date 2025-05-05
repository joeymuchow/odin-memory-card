import { useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("");

  // What is needed for memory card game
  // State to track current score, high score, guesses
  // Hooks to get images and info from api
  // Thinking about using DnD api for the game

  // Components
  // App holds - all below components
  // Scoreboard - done
  // Image list or a Game component?
  // Image

  return (
    <>
      <h1>Memory Game</h1>
      <Scoreboard score={score} highScore={highScore} />
      <p>{message}</p>
      <Game
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        setMessage={setMessage}
      />
    </>
  );
}

export default App;
