import PropTypes from 'prop-types'
import React from 'react'
import GameRules from '../GameRules'
import './styles.scss'

const Header = props => {
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

  return (
    <header data-test='header'>
      <div className='gw-stripe' />
      <h1>Word Guessing Game</h1>
      <div className={success ? 'gw-success show' : 'gw-success'}>
        {success}
      </div>

      <div
        className={success ? 'gw-instructions hide' : 'gw-instructions'}
      >
        {instructions}
      </div>

      <GameRules
        success={props.success}
        gameRules={props.gameRules}
        guessedWords={props.guessedWords}
      />
    </header>
  )
}

Header.propTypes = {
  success: PropTypes.bool
}

export default Header
