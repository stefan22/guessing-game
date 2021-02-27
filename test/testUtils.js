/**
 * Returns component with data-attribute
 * @param {ShallowWrapper} Enzyme shallow wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */

export const findDataTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
