import PropTypes from 'prop-types'
import React from 'react'
import GameRules from '../GameRules'
import './styles.scss'

const Header = props => {
  let instructions, isSuccess
  if (!props.guessedWords) {
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
    isSuccess = (
      <span data-test='guessed-word-correctly'>
        Congratulations! You guessed the word!
      </span>
    )
  }

  return (
    <header data-test='header'>
      <div className='gw-stripe' />
      <h1>Word Guessing Game</h1>
      <p>
        succes: {props.success ? 'true' : 'false'} secret: {props.secret}{' '}
      </p>

      <div className={props.success ? 'gw-success show' : 'gw-success'}>
        {isSuccess}
      </div>

      <div
        className={
          props.success ? 'gw-instructions hide' : 'gw-instructions'
        }
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
  success: PropTypes.bool,
}

export default Header
