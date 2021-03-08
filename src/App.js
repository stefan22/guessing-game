import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSecretWord, gameRules } from './redux/actions'
import GuessedWords from './components/GuessedWords'

class UnconnectedApp extends Component {
  componentDidMount () {
    // getSecretWord
    this.props.getSecretWord()
    this.props.gameRules()
  }

  render () {
    return (
      <div className='App'>
        <GuessedWords
          rules={this.props.rules}
          guessedWords={this.props.guessedWords}
          success={this.props.success}
          secret={this.props.secret}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secret, rules } = state
  return {
    success,
    rules,
    guessedWords,
    secret
  }
}

export default connect(mapStateToProps, { getSecretWord, gameRules })(
  UnconnectedApp
)
