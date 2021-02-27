import React from 'react'
import { shallow } from 'enzyme'
import GuessedWords from './index'
import { findDataTestAttr } from '../../../test/testUtils'

const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 },
  ],
}

/**
 * Function factory to create ShallowWrapper
 * for GuessedWords component
 * @param {} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setProps} />)
}

test('does not throw a warning with expected props', () => {
  const wrapper = setup()
  expect(wrapper.find('.guessedWord')).toBeDefined()
})

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessWords: [] })
  })

  test('renders without errors', () => {
    const comp = findDataTestAttr(wrapper, 'guessed-words')
    expect(comp.length).toBe(1)
  })

  test('renders instructions to guess a word', () => {
    const instructions = findDataTestAttr(
      wrapper,
      'guessed-instructions',
    )
    expect(instructions.text().length).toBeGreaterThan(5)
  })

  test('renders instructions after a word entered', () => {
    const instructions = findDataTestAttr(
      wrapper,
      'guessed-instructions',
    )
    expect(instructions.text().length).toBeGreaterThan(5)
  })

  test('does show instructions to enter a word', () => {})
})

describe('if there are words guessed', () => {})
