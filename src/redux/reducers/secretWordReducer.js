// import { actionTypes } from '../actions'

const actionTypes = {
  SET_SECRET_WORD: 'SET_SECRET_WORD'
}

/**
 * @function secretWordReducer
 * @param {string} state -before reducer.
 * @param {object} action
 * @returns {string} -new state - secret word
 */

const initialState = ''

export const secretWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload

    default:
      return state
  }
}
