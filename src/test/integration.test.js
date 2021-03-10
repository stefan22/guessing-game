import { storeFactory } from './testUtils'
import { guessWord, gameRules } from '../redux/actions'

describe('`guessWord` action possible outcomes', () => {
  const secret = 'chain'
  const badGuess = { word: 'party' }

  describe('no prior guessed words', () => {
    let store
    const initialState = {
      secret,
      rules: true,
      guessedWords: [
        { word: '', matches: 0 }
      ]
    }
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    test('does update state `secret` with word `chain`', () => {
      store.dispatch(guessWord(badGuess))
      const newstate = store.getState()
      expect(newstate.secret).toBe(secret)
    })

    test('does update state with guessed word `party`', () => {
      store.dispatch(guessWord(badGuess))
      const newstate = store.getState()
      const { guessedWords } = newstate
      const wrd = guessedWords[1].word.word
      expect(wrd).toBe(badGuess.word)
    })

    test('should have `rules` state props equal to true', () => {
      const newstate = store.getState()
      expect(newstate.rules).toBe(true)
    })

    test('does update correctly number of guessed word matches found', () => {
      store.dispatch(guessWord(badGuess))
      const newstate = store.getState()
      const { guessedWords } = newstate
      const wrd = guessedWords[1]
      expect(wrd).toHaveProperty('matches', 1)
    })
  })

  describe('some guessed words exist', () => {
    test('does update state correctly when guess incorrect', () => {})

    test('does update state correctly when guessed word matches found', () => {})
  })
})
