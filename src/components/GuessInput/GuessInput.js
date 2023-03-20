import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.info({ guess });
        setGuess('');
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
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
