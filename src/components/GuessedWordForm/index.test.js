import React from 'react'
import { shallow } from 'enzyme'
import GuessedWordForm from './'
import {storeFactory, findDataTestAttr} from '../../test/testUtils'




const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<GuessedWordForm store={store} />).dive().dive()
  return wrapper;
}
 
setup();



describe('form component', () => {
 

  test('should render component without error', () => {
    //const component = findDataTestAttr(wrapper, 'gw-form')
    
    //expect(component.length).toBe(1)
  })

  test('should render input component in page', () => {
    //const input = findDataTestAttr(wrapper, 'gw-form-input')
    //expect(input.length).toHaveProperty({type: 'text'})
  })

  test('should render submit button on page', () => {
    //const submit = findDataTestAttr(wrapper, 'gw-form-button')
    //expect(submit.length).toBe(1)
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
