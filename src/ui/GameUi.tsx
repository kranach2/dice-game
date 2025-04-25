import React from 'react';
import Image from 'next/image';

const GameUi = ({
  dice,
  totalScoreP1,
  totalScoreP2,
  currentScore,
  activePlayer,
}: {
  dice: number;
  totalScoreP1: number;
  totalScoreP2: number;
  currentScore: number;
  activePlayer: number;
}) => {
  return (
    <>
      <div className="flex justify-center font-bold text-5xl text-white py-10">
        Dice Game
      </div>
      <div className="flex justify-around">
        <div
          className={`font-bold sm:text-2xl md:text-3xl lg:text-4xl sm:font-bold md:font-normal ${
            activePlayer === 2 ? 'text-gray-500' : 'text-white'
          }`}
        >
          <div className="">Player 1</div>
          <div className=" mt-20">Total Score: {totalScoreP1}</div>
        </div>
        <div className="sm:mt-5 md:mt-10">
          <Image
            src={`/images/dice-six-faces-${dice}.png`}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div
          className={`font-bold sm:text-2xl md:text-3xl lg:text-4xl sm:font-bold md:font-normal ${
            activePlayer === 1 ? 'text-gray-500' : 'text-white'
          }`}
        >
          <div className="">Player 2</div>
          <div className="mt-20">Total Score: {totalScoreP2}</div>
        </div>
      </div>
      <div className="flex justify-center sm:text-2xl md:text-3xl lg:text-4xl text-white mt-20">
        Current Score: {currentScore}
      </div>
    </>
  );
};

export default GameUi;
