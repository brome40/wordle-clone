import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitGuess(guess);
        setGuess('');
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        pattern="[A-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
