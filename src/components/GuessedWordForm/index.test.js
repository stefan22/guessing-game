import React from 'react'
import { shallow } from 'enzyme'
import GuessedWordForm from './'
import { storeFactory, findDataTestAttr } from '../../test/testUtils'

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<GuessedWordForm store={store} />).dive().dive()
  return wrapper
}

setup()

describe('word not guessed, `success` false', () => {
  let wrapper
  beforeEach(() => {
    const initialState = { success: false }
    wrapper = setup(initialState)
  })

  test('renders component without errors', () => {
    const component = findDataTestAttr(wrapper, 'gw-form')
    expect(component.length).toBe(1)
  })

  test('renders input box', () => {
    const component = findDataTestAttr(wrapper, 'gw-form-input')
    expect(component.length).toBe(1)
  })

  test('renders submit button', () => {
    const component = findDataTestAttr(wrapper, 'gw-form-button')
    expect(component.length).toBe(1)
  })
})

describe('word has been guessed, `success` true', () => {
  let wrapper
  beforeEach(() => {
    const initialState = { success: true }
    wrapper = setup(initialState)
  })

  test('does not render form component', () => {
    const component = findDataTestAttr(wrapper, 'gw-form')
    expect(component.length).toBe(0)
  })

  test('does not render input box', () => {
    const component = findDataTestAttr(wrapper, 'gw-form-input')
    expect(component.length).toBe(0)
  })

  test('does not render submit button', () => {
    const component = findDataTestAttr(wrapper, 'gw-form-button')
    expect(component.length).toBe(0)
  })
})

describe('form state updates', () => {})
