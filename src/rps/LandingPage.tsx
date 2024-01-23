import { useState } from "react";
import "./LandingPage.css";
import GameBoard from "./GameBoard";

const LandingPage = () => {
  const [gameBoard, setGameBoard] = useState(false);

  if (gameBoard) {
    console.log(gameBoard);
    return <GameBoard />;
  } else {
    return (
      <div className="landing-container">
        <div>
          <h1 className="game-title">A Classic Game of Rock Paper Scissors</h1>
        </div>
        <div>
          <span
            onClick={() => setGameBoard(true)}
            className="material-symbols-outlined play-icon"
          >
            play_arrow
          </span>
        </div>
      </div>
    );
  }
};

export default LandingPage;
