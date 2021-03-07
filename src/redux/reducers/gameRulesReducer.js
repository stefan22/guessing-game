export const actionTypes = {
  GAME_RULES: 'GAME_RULES',
}

/**
 *  Messages Reducer
 * @param {array} state
 * @param {object} action
 * @returns {boolean}
 */

export const gameRulesReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.GAME_RULES:
      let success = state.success
      if (success) return false
      return true

    default:
      return state
  }
}
