export const fetchWord = () => {
  return function (dispatch) {
    return dispatch().then(wrd => console.log('word ', wrd))
  }
}
