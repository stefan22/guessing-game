import axios from 'axios'
import cheerio from 'cheerio'
import { getLetterMatchingCount } from '../../test/testUtils'

export const actionTypes = {
  GUESSED_SUCCESS: 'GUESSED_SUCCESS',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  GUESSED_WORDS: 'GUESSED_WORDS',
  GUESSED_WORD: 'GUESSED_WORD',
  GAME_RULES: 'GAME_RULES',
  ON_SUBMIT_GUESS: 'ON_SUBMIT_GUESS',
  ON_CHANGE_GUESS: 'ON_CHANGE_GUESS'
}

/**
 * returns redux function that dispatches
 * word action
 * @param {string} guessed word
 * @returns {function}
 */

export const guessWord = guessedWord => {
  return function (dispatch, getState) {
    const secret = getState().secretWord
    console.log('is secret ', secret)
    const matchingLetters = getLetterMatchingCount(guessedWord, secret)

    dispatch({
      type: actionTypes.GUESSED_WORD,
      payload: { guessedWord, matchingLetters }
    })

    if (guessedWord === secret) {
      dispatch({ type: actionTypes.GUESSED_SUCCESS })
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
    dispatch({
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
