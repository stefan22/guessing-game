import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSecretWord, gameRules } from './redux/actions'
import GuessedWords from './components/GuessedWords'

class App extends Component {
  componentDidMount () {
    this.props.getSecretWord() // secret
    // this.props.gameRules()
  }

  render () {
    console.log('store is ', window.store.getState())
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
  App
)
