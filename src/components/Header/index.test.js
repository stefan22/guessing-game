import React from 'react'
import { shallow } from 'enzyme'
import Header from './'
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
  return shallow(<Header {...setupProps} />)
}

describe('if there are no words guessed', () => {
  let wrapper
  const guessedWords = []
  beforeEach(() => {
    wrapper = setup({ guessedWords })
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
  let wrapper
  const guessedWords = [
    { guessWord: 'jockey', letterMatchCount: 2, success: false },
    { guessWord: 'saint', letterMatchCount: 1, success: false },
    { guessWord: 'party', letterMatchCount: 5, success: false }
  ]
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  test("renders new instructions after a word's entered", () => {
    const instructions = findDataTestAttr(wrapper, 'guessed-instructions')
    expect(instructions.text()).toEqual("Nice ...you're on your way!")
  })

  test('does render success message when word guessed correctly', () => {
    wrapper = setup({
      guessWord: 'party',
      letterMatchCount: 5,
      success: true
    })
    const success = findDataTestAttr(wrapper, 'guessed-word-correctly')
    expect(success.text()).toBe('Congratulations! You guessed the word!')
  })
})
