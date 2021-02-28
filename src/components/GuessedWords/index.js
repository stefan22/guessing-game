import React from 'react'
import Header from '../Header'
import './styles.scss'
import PropTypes from 'prop-types'

const GuessedWords = props => {
  const gwRows = props.guessedWords.map((wrd, idx) => (
    <tr className='gw-row' data-test='guessed-word' key={idx}>
      <td className='gw-single'>{wrd.guessedWord}</td>
      <td className='gw-single'>{wrd.letterMatchCount}</td>
    </tr>
  ))

  return (
    <div className='gw-wrapper'>
      <Header guessedWords={props.guessedWords} success={props.success} />

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
