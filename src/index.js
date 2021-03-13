import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import './styles/main.scss'

window.store = configureStore()
const store = window.store

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'))

renderApp()
