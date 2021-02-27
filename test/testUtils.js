/**
 * Returns component with data-attribute
 * @param {ShallowWrapper} Enzyme shallow wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
