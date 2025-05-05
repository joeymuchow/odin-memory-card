import "../styles/Scoreboard.css"

function Scoreboard({ score, highScore }) {

  return (
    <div className="scoreboard">
      <p className="current-score">Score: {score}</p>
      <p className="high-score">High Score: {highScore}</p>
    </div>
  )
}

export default Scoreboard