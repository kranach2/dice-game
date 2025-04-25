import React from 'react';
import Image from 'next/image';

const Overlay = ({
  winner,
  setWinner,
  setDice,
  setTotalScoreP1,
  setTotalScoreP2,
  setActivePlayer,
  setCurrentScore,
}: {
  winner: number;
  setWinner: (value: number) => void;
  setDice: (value: number) => void;
  setTotalScoreP1: (value: number) => void;
  setTotalScoreP2: (value: number) => void;
  setActivePlayer: React.Dispatch<React.SetStateAction<1 | 2>>;
  setCurrentScore: (value: number) => void;
}) => {
  function resetWinner() {
    setWinner(0);
    setDice(0);
    setTotalScoreP1(0);
    setTotalScoreP2(0);
    setActivePlayer(1);
    setCurrentScore(0);
  }
  return (
    <>
      <div
        className={`w-screen h-screen bg-black absolute top-0 
        ${!winner ? 'invisible' : 'visible'} `}
      >
        <div className="flex flex-col justify-center items-center">
          <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
            <Image
              src="/images/celebrations.png"
              alt="celebrations"
              sizes="100vw"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="text-4xl text-white mt-10">
            Winner is Player {winner}
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-bold rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer"
              onClick={resetWinner}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
