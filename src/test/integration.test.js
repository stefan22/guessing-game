import { storeFactory } from './testUtils'
import { guessWord } from '../redux/actions'

describe('`guessWord` action possible outcomes', () => {
  const secret = 'chain'
  const badGuess = { word: 'party' }

  describe('no prior guessed words', () => {
    let store
    const initialState = {
      secret,
      rules: true,
      guessedWords: []
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
      const wrd = guessedWords[0].word.word
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
      const wrd = guessedWords[0]
      expect(wrd).toHaveProperty('matches', 1)
    })
  })

  describe('some guessed words exist', () => {
    const guessedWords = [{
      word: 'trump', matches: 3
    }]
    const initialState = {
      guessedWords,
      secret,
      rules: true
    }
    let store
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    test('does update state correctly when guess incorrect', () => {
      store.dispatch(guessWord(badGuess))
      const newstate = store.getState()
      expect(newstate.guessedWords.length).toBe(2)
    })

    test('does update `success` state prop correctly', () => {
      store.dispatch(guessWord(badGuess))
      const newstate = store.getState()
      expect(newstate.success).toBe(false)
    })

    test('should have new guess word equal to `trump` on guessed words table', () => {
      store.dispatch(guessWord(badGuess))
      const newstate = store.getState()
      const newword = newstate.guessedWords[0].word
      expect(newword).toBe('trump')
    })

    test('guess word length equals five and match count less than five', () => {
      store.dispatch(guessWord(badGuess))
      const newstate = store.getState()
      const newword = newstate.guessedWords[0].word
      const newmatch = newstate.guessedWords[0].matches
      expect(newword.length).toBe(5)
      expect(newmatch).toBeLessThan(5)
    })

    test('does update state correctly when guessed word matches found', () => {
      store.dispatch(guessWord(badGuess))
      const newstate = store.getState()
      const newword = newstate.guessedWords[0].word
      expect(newword).toBe('trump')
      expect(guessedWords[0]).toHaveProperty('matches', 3)
    })
  })

  describe('all guessed word letters match secret word', () => {
    const initialState = { secret }
    const guessCorrect = { word: 'chain' }
    let store, newstate
    beforeEach(() => {
      store = storeFactory(initialState)
      store.dispatch(guessWord(guessCorrect))
      newstate = store.getState()
    })
    test('does update state correctly when guessed word match found', () => {
      expect(guessCorrect).toHaveProperty('word', 'chain')
      expect(guessCorrect.word.length).toBe(5)
    })
    test('should have guessed word equals to secret word', () => {
      expect(guessCorrect.word).toEqual(newstate.secret)
      expect(newstate.secret).toMatch(guessCorrect.word)
    })
  })
})
