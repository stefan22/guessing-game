import axios from 'axios'
import cheerio from 'cheerio'
import { getLetterMatchingCount } from '../../test/testUtils'
import actionTypes from '../types'

/**
 * returns redux function that dispatches
 * word action
 * @param {string} guessed word
 * @returns {function}
 */

export const guessWord = word => {
  return function (dispatch, getState) {
    const secret = getState().secret
    const matches = getLetterMatchingCount(word, secret)

    dispatch({
      type: actionTypes.GUESSED_WORD,
      payload: { word, matches }
    })

    if (word === secret) {
      dispatch({
        type: actionTypes.GUESSED_SUCCESS

      })
    }
  }
}

/**
 * returns redux function that dispatches
 * gameRules action
 * @function gameRules
 * @returns {object} action, type GAME_RULES
 */
export const gameRules = () => {
  return dispatch => {
    return dispatch({
      type: actionTypes.GAME_RULES
    })
  }
}

/**
 * returns redux function that initiates axios request
 * and dispatches response - secret word - action
 * @returns {function}
 */

export const getSecretWord = () => {
  return dispatch => {
    return axios.get('http://localhost:3000/word').then(response => {
      const $ = cheerio.load(response.data)
      const word = $('#output').text().trim()
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: word
      })
    })
  }
}
