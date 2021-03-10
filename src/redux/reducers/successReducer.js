// import { actionTypes } from '../actions'

export const actionTypes = {
  GUESSED_SUCCESS: 'GUESSED_SUCCESS',
  GAME_RULES: 'GAME_RULES'
}

/**
 * Success Reducer
 * @param {array} state
 * @param {object} action
 * @returns {boolean}
 */

const initialState = false

export const successReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GUESSED_SUCCESS:
      return true

    default:
      return state
  }
}
