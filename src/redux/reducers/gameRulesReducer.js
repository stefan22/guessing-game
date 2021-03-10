import actionTypes from '../types'

/**
 *  Messages Reducer
 * @param {array} state
 * @param {object} action
 * @returns {boolean}
 */

const initialState = { rules: true }

export const gameRulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_RULES:
      return !state.rules

    default:
      return state
  }
}
