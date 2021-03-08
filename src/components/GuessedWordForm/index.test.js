import React from 'react'
import { shallow } from 'enzyme'
import GuessedWordForm from './'
import { findDataTestAttr } from '../../test/testUtils'

describe('form component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<GuessedWordForm />)
  })

  test('should render component without error', () => {
    const component = findDataTestAttr(wrapper, 'gw-form')
    expect(component.length).toBe(1)
  })

  test('should render input component in page', () => {
    const input = findDataTestAttr(wrapper, 'gw-form-input')
    expect(input.length).toBe(1)
  })

  test('should render submit button on page', () => {
    const submit = findDataTestAttr(wrapper, 'gw-form-button')
    expect(submit.length).toBe(1)
  })
})

describe('word has not been guessed', () => {
  test('renders component without errors', () => {})

  test('renders input box', () => {})

  test('renders submit button', () => {})
})

describe('word has been guessed', () => {
  test('renders component without error', () => {})

  test('does not render input box', () => {})

  test('does not render submit button', () => {})
})

describe('form state updates', () => {})
