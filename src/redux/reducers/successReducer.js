import actionTypes from '../types'

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
      return {
        success: true
      }

    default:
      return state
  }
}
