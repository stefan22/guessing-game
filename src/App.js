import React, { Component } from 'react'
import GuessedWords from './components/GuessedWords'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <GuessedWords guessedWords={[]} success={false} gameRules />
      </div>
    )
  }
}

export default App
