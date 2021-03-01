import React from 'react'
import { shallow } from 'enzyme'
import GuessedWords from './'
import { findDataTestAttr } from '../../test/testUtils'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
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
  const guessedWords = []
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  test('renders without errors', () => {
    const comp = findDataTestAttr(wrapper, 'guessed-words')
    expect(comp.length).toBe(1)
  })
})

describe('if there are words guessed', () => {
  let wrapper
  const guessedWords = [
    { guessWord: 'jockey', letterMatchCount: 2, success: false },
    { guessWord: 'saint', letterMatchCount: 1, success: false },
    { guessWord: 'party', letterMatchCount: 5, success: false }
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

  test('renders number of correct guessed words matches', () => {
    const guessedCorrect = findDataTestAttr(wrapper, 'guessed-word')
    expect(guessedCorrect.length).toBe(guessedWords.length)
  })
})
