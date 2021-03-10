import React from 'react'
import Header from '../Header'
import GuessedWordForm from '../GuessedWordForm'
import { getLetterMatchingCount } from '../../test/testUtils'
import './styles.scss'
// import PropTypes from 'prop-types'

const GuessedWords = props => {
  // let matches = getLetterMatchingCount(props.guessedWords[0], props.secret)
  // console.log('word matching ', matches)

  return (

    <div className='gw-wrapper'>
      <Header
        rules={props.rules}
        secret={props.secret}
        guessedWords={props.guessedWords}
        success={props.success}
      />

      <div
        className={!props.success ? 'gw-container' : 'gw-container hide'}
        data-test='guessed-section'
      >
        <div className='gw-inner-container' data-test='guessed-words'>
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
              {props.guessedWords.map((itm, idx) =>
                <div key={idx} className='gw-table-row'>
                  <div className='gw-table-cell'>{itm.word || 'N/A'}</div>
                  <div className='gw-table-cell'>
                    {getLetterMatchingCount(itm, props.secret) || 'no match'}
                  </div>
                </div>

              )}

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// GuessedWords.propTypes = {
//   guessedWords: PropTypes.arrayOf(
//     PropTypes.shape({
//       guessedWord: PropTypes.string,
//       letterMatchCount: PropTypes.number.isRequired,
//       rules: PropTypes.bool,
//       succes: PropTypes.bool
//     })
//   ).isRequired
// }

export default GuessedWords
