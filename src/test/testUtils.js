// import initStore from 'redux-test-belt'
// import thunk from 'redux-thunk'

/**
 * Returns component with data-attribute
 * @param {ShallowWrapper} Enzyme shallow wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */

export const findDataTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

/**
 * Returns count of unique
 * characters matching secret word
 * @param {string} word
 * @param {string} secretWord
 * @returns {number}
 */

export const getLetterMatchingCount = (word, secretWord) => {
  const wordSplit = word.split('')
  const secretSplit = secretWord.split('')
  const numMat = []
  secretSplit.map(letter => {
    return wordSplit.forEach(itm =>
      !numMat.includes(itm) && itm === letter ? numMat.push(itm) : false
    )
  })
  return numMat.length
}

/**
 * creates store with reducers, middleware and initial state
 * @function store factory
 * @param {object} initial state
 * @return {store} redux store
 */

export const mockStore = () => {}
