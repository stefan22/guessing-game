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

export const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.GUESSED_SUCCESS:
      return true

    default:
      return state
  }
}
