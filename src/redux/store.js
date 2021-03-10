import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export const middlewares = [thunk]

// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const store = createStore(rootReducer, applyMiddleware(thunk))

// const store = createStoreWithMiddleware(rootReducer)

// console.log(window.store.getState())

export default store
