import React from "react";

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        const statusClass = result ? `cell ${result[num].status}` : 'cell';
        return (
          <span key={num} className={statusClass}>
            {value ? value[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
