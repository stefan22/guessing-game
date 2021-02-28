import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

const GuessedWords = props => {
  let instructions
  if (props.guessedWords.length === 0) {
    instructions = (
      <span data-test='guessed-instructions'>
        Try to guess the secret word!
      </span>
    )
  } else if (props.guessedWords.length > 0) {
    instructions = (
      <span data-test='guessed-instructions'>
        Nice ...you're on your way!
      </span>
    )
  }

  const gwRows = props.guessedWords.map((wrd, idx) => (
    <tr className='gw-row' data-test='guessed-word' key={idx}>
      <td className='gw-single'>{wrd.guessedWord}</td>
      <td className='gw-single'>{wrd.letterMatchCount}</td>
    </tr>
  ))

  return (
    <div className='gw-wrapper'>
      <header>
        <heading>Heading</heading>
        <div className='instructions'>{instructions}</div>
      </header>

      <div className='gw-container' data-test='guessed-section'>
        <div data-test='guessed-words'>
          <h2>Guessed Words</h2>

          <table className='gw-table gw-table__show'>
            <thead className='gw-heading'>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody className='gw-body'>{gwRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default GuessedWords
