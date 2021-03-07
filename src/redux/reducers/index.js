import { combineReducers } from 'redux'
import { secretWordReducer } from './secretWordReducer'
import { successReducer } from './successReducer'
import { guessedWordsReducer } from './guessedWordsReducer'
import { gameRulesReducer } from './gameRulesReducer'

export default combineReducers({
  rules: gameRulesReducer,
  success: successReducer,
  secret: secretWordReducer,
  guessedWords: guessedWordsReducer,
})

export {
  successReducer,
  gameRulesReducer,
  guessedWordsReducer,
  secretWordReducer,
}
