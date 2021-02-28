import { getLetterMatchingCount } from './testUtils'

describe('Letter Matching Count', () => {
  let matches, guessedWord
  const secretWord = 'party'

  test('returns correct count when no matching letter', () => {
    guessedWord = 'london'
    matches = getLetterMatchingCount(guessedWord, secretWord)
    expect(matches).toBe(0)
  })

  test('returns correct count when there are matching letters', () => {
    guessedWord = 'candy'
    matches = getLetterMatchingCount(guessedWord, secretWord)
    expect(matches).toBe(2)
  })

  test('returns correct count when there are duplicate letters', () => {
    guessedWord = 'martha'
    matches = getLetterMatchingCount(guessedWord, secretWord)
    expect(matches).toBe(3)
  })

  test('returns count equals 5 to indicate word guessed correctly', () => {
    guessedWord = 'party'
    matches = getLetterMatchingCount(guessedWord, secretWord)
    expect(matches).toBe(5)
  })
})
