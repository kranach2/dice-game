'use client';
import React from 'react';

const PlayButton = ({
  getRandomDice,
  getCurrentScore,
}: {
  getRandomDice: (value: number) => void;
  getCurrentScore: (value: number) => void;
}) => {
  const rollDice = (): void => {
    const randomNumber = Math.ceil(Math.random() * 6);
    getRandomDice(randomNumber);
    if (randomNumber === 1) {
      getCurrentScore(0);
    } else {
      getCurrentScore(randomNumber);
    }
    console.log('rolled');
  };

  return (
    <div>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 flex justify-center w-30 cursor-pointer"
        onClick={rollDice}
      >
        Roll
      </button>
    </div>
  );
};

export default PlayButton;
