import { useEffect, useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const monsterList = [
      "adult-red-dragon",
      "blink-dog",
      "bugbear",
      "bulette",
      "drider",
      "gelatinous-cube",
      "gnoll",
      "mimic",
      "ogre",
      "owlbear",
      "pit-fiend",
      "rakshasa",
    ];
    const fetchData = async (monster) => {
      try {
        const response = await fetch(
          "https://www.dnd5eapi.co/api/2014/monsters/" + monster
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        return json;
      } catch (e) {
        console.error(e);
      }
    };

    const promises = monsterList.map((monster) => {
      return fetchData(monster);
    });

    Promise.all(promises).then((response) => {
      const arr = [];
      for (const item of response) {
        const dataObj = {
          name: item.name,
          image: item.image,
          index: item.index,
        };
        arr.push(dataObj);
      }
      setData(arr);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>DnD Memory Game</h1>
      <Scoreboard score={score} highScore={highScore} />
      <p>{message}</p>
      {!loading && (
        <Game
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          setMessage={setMessage}
          data={data}
        />
      )}
    </>
  );
}

export default App;
