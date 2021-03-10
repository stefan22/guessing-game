import { getLetterMatchingCount } from './'

describe('Letter Matching Count fn', () => {
  let matches, guessedWord
  const secret = 'party'

  test('returns correct count when no matching letter', () => {
    guessedWord = { word: 'london' }
    matches = getLetterMatchingCount(guessedWord, secret)
    expect(matches).toBe(0)
  })

  test('returns correct count when there are matching letters', () => {
    guessedWord = { word: 'candy' }
    matches = getLetterMatchingCount(guessedWord, secret)
    expect(matches).toBe(2)
  })

  test('returns correct count when there are duplicate letters', () => {
    guessedWord = { word: 'martha' }
    matches = getLetterMatchingCount(guessedWord, secret)
    expect(matches).toBe(3)
  })

  test('returns count equals 5 to indicate word guessed correctly', () => {
    guessedWord = { word: 'party' }
    matches = getLetterMatchingCount(guessedWord, secret)
    expect(matches).toBe(5)
  })
})
