import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessWord } from '../../redux/actions'
import './styles.scss'

class GuessedWordForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentGuess: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const guess = this.state.currentGuess
    if (guess && guess.length > 0) {
      this.props.dispatch(guessWord())
      return this.setState({ currentGuess: '' })
    }
  }

  render () {
    const formContents = this.props.success
      ? null
      : (
        <form data-test='gw-form'>
          <input
            data-test='gw-form-input'
            className='gw-input'
            onChange={event =>
              this.setState({ currentGuess: event.target.value })}
            type='text'
            name='word'
          />
          <input
            data-test='gw-form-button'
            className='gw-button'
            type='submit'
            onClick={e => this.handleOnSubmit(e)}
            placeholder='Enter a word..'
            value='Guess word'
          />
        </form>
        )

    return formContents
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

GuessedWordForm.propTypes = {
  handleOnSubmit: PropTypes.func,
  handleOnChange: PropTypes.func
}

export default connect(mapStateToProps, { guessWord })(GuessedWordForm)
