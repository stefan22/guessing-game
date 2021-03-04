import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import {
  successReducer,
  messagesReducer,
  guessedWordsReducer
} from './reducers'

const initialState = {}
const middlewares = [thunk]

const rootReducer = combineReducers({
  success: successReducer,
  messages: messagesReducer,
  guessedWords: guessedWordsReducer
})

const composeEnhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancer(applyMiddleware(...middlewares))

const store = createStore(rootReducer, initialState, enhancer)

export default store

console.log(store.getState())
