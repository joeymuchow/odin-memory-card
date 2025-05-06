import { useState } from "react";
import "../styles/Game.css";
import Image from "./Image";

function Game({ score, setScore, highScore, setHighScore, setMessage, data }) {
  const [guesses, setGuesses] = useState([]);
  const [imageList, setImageList] = useState(randomizeImages(data));

  function handleClick(e) {
    setMessage("");
    const guess = e.target.textContent || e.target.nextSibling.textContent;

    if (checkGuess(guess, guesses)) {
      setGuesses([...guesses, guess]);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      if (newScore === imageList.length) {
        setScore(0);
        setGuesses([]);
        setMessage("Congrats! You Won! Click on an image to play again.");
      }
    } else {
      setScore(0);
      setGuesses([]);
      setMessage("Game over... Click on an image to play again.");
    }

    setImageList(randomizeImages(imageList));
  }

  return (
    <div className="game">
      {imageList &&
        imageList.map((item) => {
          return (
            <Image
              key={item.index}
              image={`https://www.dnd5eapi.co${item.image}`}
              name={item.name}
              onClick={handleClick}
            />
          );
        })}
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

function randomizeImages(imageList) {
  const imageObjects = [...imageList];
  for (let i = 0; i < imageObjects.length; i++) {
    let rand = Math.floor(Math.random() * (i+1));
    let oldElement = imageObjects[i];
    imageObjects[i] = imageObjects[rand];
    imageObjects[rand] = oldElement;
  }

  return imageObjects;
}

export default Game;
