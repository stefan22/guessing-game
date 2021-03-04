import { combineReducers } from 'redux'
import { messagesReducer } from './messagesReducer'
import { successReducer } from './successReducer'
import { guessedWordsReducer } from './guessedWordsReducer'

const rootReducer = combineReducers(
  messagesReducer,
  successReducer,
  guessedWordsReducer
)

export { successReducer, messagesReducer, guessedWordsReducer }

export default rootReducer
