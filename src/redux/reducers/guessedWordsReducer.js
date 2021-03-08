// import { actionTypes } from '../actions'

export const actionTypes = {
  GUESSED_WORD: 'GUESSED_WORD'
}

/**
 * GuessedWords Reducer
 * @param {array} state - guessed words
 * @param {object} action
 * @returns {array} - new guessed state
 */

const initialState = []

export const guessedWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GUESSED_WORD:
      return [...state, action.payload]
    default:
      return state
  }
}
