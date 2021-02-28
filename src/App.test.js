import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

test('renders <App />', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.length).toBe(1)
})
