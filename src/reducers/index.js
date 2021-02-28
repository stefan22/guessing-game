import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'
import successReducer from './successReducer'
import wordsGuessedReducer from './wordsGuessedReducer'

const rootReducer = combineReducers({
  messages: messagesReducer,
  success: successReducer,
  wordsGuessed: wordsGuessedReducer,
})

export default rootReducer
