import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const GuessedWords = () => {
  let instructions = (
    <span data-test="guessed-instructions">
      lara odalaf lara linmeafmore
    </span>
  );

  return (
    <div>
      <heading>Heading</heading>
      <div className="instructions">{instructions}</div>
      <div data-test="guessed-words"></div>
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GuessedWords;
