import React, { Component } from 'react'
import GuessedWords from './components/GuessedWords'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Word Guessing Game</h1>
        <GuessedWords guessedWords={[]} success={false} />
      </div>
    )
  }
}

export default App
