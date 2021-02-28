import React from 'react'
import { shallow } from 'enzyme'
import GuessedWords from './index'
import { findDataTestAttr } from '../../../test/testUtils'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

/**
 * Function factory to create ShallowWrapper
 * for GuessedWords component
 * @param {} props
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw a warning with expected props', () => {
  const wrapper = setup()
  expect(wrapper.find('guessedWords')).toBeDefined()
})

describe('if there are no words guessed', () => {
  let wrapper
  let guessedWords = []
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  test('renders without errors', () => {
    const comp = findDataTestAttr(wrapper, 'guessed-words')
    expect(comp.length).toBe(1)
  })

  test('does render instructions to enter a word', () => {
    const instructions = findDataTestAttr(wrapper, 'guessed-instructions')
    expect(instructions.text().length).toBeGreaterThan(5)
  })

  test('render instruction to "Try to guess the secret word"', () => {
    const instructions = findDataTestAttr(wrapper, 'guessed-instructions')
    expect(instructions.text()).toEqual('Try to guess the secret word!')
  })
})

describe('if there are words guessed', () => {
  let wrapper, guessedWords
  guessedWords = [
    { guessWord: 'jockey', letterMatchCount: 2 },
    { guessWord: 'saint', letterMatchCount: 1 },
    { guessWord: 'party', letterMatchCount: 5 },
  ]
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  test('renders without errors', () => {
    const component = findDataTestAttr(wrapper, 'guessed-words')
    expect(component.length).toBe(1)
  })

  test('renders guessed words section markup', () => {
    const guessedSection = findDataTestAttr(wrapper, 'guessed-section')
    expect(guessedSection.length).toBe(1)
  })

  test("renders new instructions after a word's entered", () => {
    const instructions = findDataTestAttr(wrapper, 'guessed-instructions')
    expect(instructions.text()).toEqual("Nice ...you're on your way!")
  })

  test('renders number of correct guessed words', () => {
    const guessedCorrect = findDataTestAttr(wrapper, 'guessed-word')
    expect(guessedCorrect.length).toBe(guessedWords.length)
  })
})
