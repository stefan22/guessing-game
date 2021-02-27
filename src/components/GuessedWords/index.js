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

  const gwNumRows = props.guessedWords.map((wrd, idx) => (
    <tr data-test='guessed-word' key={idx}>
      <td>{wrd.guessedWord}</td>
      <td>{wrd.letterMatchCount}</td>
    </tr>
  ))

  //console.log(props.guessedWords)

  return (
    <div className='wrapper'>
      <heading>Heading</heading>
      <div className='instructions'>{instructions}</div>

      <div className='main-container' data-test='guessed-section'>
        <div data-test='guessed-words'>
          <h2>Guesses</h2>

          <table className='table table-sm'>
            <thead className='thead-light'>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{gwNumRows}</tbody>
          </table>

          <div className='gw-wrapper'>Guessed word</div>
        </div>
      </div>
    </div>
  )
}

// GuessedWords.propTypes = {
//   guessedWords: PropTypes.arrayOf(
//     PropTypes.shape({
//       guessedWord: PropTypes.string.isRequired,
//       letterMatchCount: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// }

export default GuessedWords
