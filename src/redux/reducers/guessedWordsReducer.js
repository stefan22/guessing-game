import actionTypes from '../types'

/**
 * GuessedWords Reducer
 * @param {array} state - array guessed words
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
