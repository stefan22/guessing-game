import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

const GuessedWords = props => {
  let instructions, success
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

  if (props.success) {
    success = (
      <span data-test='guessed-word-correctly'>
        Congratulations! You guessed the word!
      </span>
    )
  }

  const gwRows = props.guessedWords.map((wrd, idx) => (
    <tr className='gw-row' data-test='guessed-word' key={idx}>
      <td className='gw-single'>{wrd.guessedWord}</td>
      <td className='gw-single'>{wrd.letterMatchCount}</td>
    </tr>
  ))

  //console.log(props)
  return (
    <div className='gw-wrapper'>
      <header data-test='header'>
        <div className={success ? 'gw-success show' : 'gw-success'}>
          {success}
        </div>

        <div
          className={success ? 'gw-instructions hide' : 'gw-instructions'}
        >
          {instructions}
        </div>
      </header>

      <div className='gw-container' data-test='guessed-section'>
        <div className='gw-inner-container' data-test='guessed-words'>
          <h2>Guessed Words</h2>
          {gwRows}
          <div className='gw-table'>
            <div className='gw-table-row'>
              <div className='gw-table-head'>
                <strong>Word</strong>
              </div>
              <div className='gw-table-head'>
                <strong>Matching letter</strong>
              </div>
            </div>

            <div className='gw-table-row'>
              <div className='gw-table-cell'>Train</div>
              <div className='gw-table-cell'>a</div>
            </div>
            <div className='gw-table-row'>
              <div className='gw-table-cell'>Lucky</div>
              <div className='gw-table-cell'>no match</div>
            </div>
          </div>
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
      succes: PropTypes.bool,
    }),
  ).isRequired,
}

export default GuessedWords
