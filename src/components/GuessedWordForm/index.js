import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'

const GuessedWordForm = props => {
  return (
    <form onSubmit={props.handleOnSubmit}>
      <input
        className='gw-input'
        onChange={e => props.handleOnChange(e.target)}
        type='text'
        name='word'
      />
      <input
        className='gw-button'
        type='submit'
        placeholder='Enter a word..'
        value='Guess word'
      />
    </form>
  )
}

GuessedWordForm.propTypes = {
  handleOnSubmit: PropTypes.func,
  handleOnChange: PropTypes.func
}

export default GuessedWordForm
