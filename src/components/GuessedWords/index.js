import React from 'react'
import Header from '../Header'
import GuessedWordForm from '../GuessedWordForm'
import './styles.scss'
import PropTypes from 'prop-types'

const GuessedWords = props => {
  let gwRows = props.guessedWords.guessedWords
  if (!!gwRows) {
    gwRows.map((wrd, idx) => (
      <tr className='gw-row' data-test='guessed-word' key={idx}>
        <td className='gw-single'>{wrd.guessedWord}</td>
        <td className='gw-single'>{wrd.letterMatchCount}</td>
      </tr>
    ))
  }

  return (
    <div className='gw-wrapper'>
      <Header
        rules={props.rules}
        secret={props.secret}
        guessedWords={props.guessedWords}
        success={props.success}
      />
      {gwRows}
      <div
        className={!props.success ? 'gw-container' : 'gw-container hide'}
        data-test='guessed-section'
      >
        <div className={'gw-inner-container'} data-test='guessed-words'>
          <GuessedWordForm />

          <h2 className={!props.success && !props.rules ? 'show' : 'hide'}>
            Guessed Words
          </h2>

          {!props.successs && !props.rules && (
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
          )}
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
      rules: PropTypes.bool,
      succes: PropTypes.bool,
    }),
  ).isRequired,
}

export default GuessedWords
