import React, { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';



// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running');
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess =  (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('won');
    }
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      {gameStatus !== 'running' && (
        <button
          onClick={() => {
            setGuesses([]);
            setGameStatus('running');
          }}
          style={{
            backgroundColor: "skyblue",
            textAlign: "center",
            height: "40px",
            width: "100px",
            marginLeft: "160px"
          }}
        >Reset</button>
      )}
      <GuessResults guesses={guesses} answer={answer}/>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length}/>}
      {gameStatus === 'lost' && <LostBanner answer={answer}/>}
    </>
  );
}

export default Game;
