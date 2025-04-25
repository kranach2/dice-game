'use client';
import React, { useState } from 'react';
import GameUi from '../ui/GameUi';
import PlayButton from './PlayButton';
import Overlay from '../ui/Overlay';

const Game = () => {
  const [dice, setDice] = useState<number>(0);
  const [totalScoreP1, setTotalScoreP1] = useState(0);
  const [totalScoreP2, setTotalScoreP2] = useState(0);
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [winner, setWinner] = useState(0);

  function getRandomDice(value: number) {
    setDice(value);
    if (value === 1) {
      setActivePlayer((prev) => (prev === 1 ? 2 : 1));
    } else {
      if (activePlayer === 1) {
        setTotalScoreP1((prev) => {
          const newScore = prev + value;
          if (newScore >= 30) setWinner(1);
          return newScore;
        });
        
      } else {
        setTotalScoreP2((prev) => {
          const newScore = prev + value;
          if (newScore >= 30) setWinner(2);
          return newScore;
        });
      }
    }

}

  function getCurrentScore(value: number) {
    setCurrentScore(value);
  }

  return (
    <>
      <div className="bg-emerald-800 h-screen flex flex-col">
        <GameUi
          dice={dice}
          totalScoreP1={totalScoreP1}
          totalScoreP2={totalScoreP2}
          currentScore={currentScore}
          activePlayer={activePlayer}
        />
        <div className="flex justify-center mt-auto mb-30">
          <PlayButton
            getRandomDice={getRandomDice}
            getCurrentScore={getCurrentScore}
          />
        </div>
      </div>
      <Overlay winner={winner} setWinner={setWinner} setDice={setDice} setTotalScoreP1={setTotalScoreP1} setTotalScoreP2={setTotalScoreP2} setActivePlayer={setActivePlayer} setCurrentScore={setCurrentScore} totalScoreP1={totalScoreP1}
          totalScoreP2={totalScoreP2}/>
    </>
  );
};

export default Game;
