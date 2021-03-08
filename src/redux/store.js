import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

export const middlewares = [ReduxThunk]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
)

const getStore = () => {
  const store = createStoreWithMiddleware(rootReducer)
  store.subscribe(() => {
    console.log(store.getState())
    return store.getState()
  })
  return store
}

const store = getStore()

export default store
