// import { actionTypes } from '../actions'

export const actionTypes = {
  GUESSED_WORD: 'GUESSED_WORD',
  GUESSED_SUCCESS: 'GUESSED_SUCCESS'
}

/**
 * GuessedWords Reducer
 * @param {array} state - array guessed words
 * @param {object} action
 * @returns {array} - new guessed state
 */

const initialState = [
  { word: 'aloha', matches: 0 }
]

export const guessedWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GUESSED_WORD:
      return [...state, action.payload]
    default:
      return state
  }
}
