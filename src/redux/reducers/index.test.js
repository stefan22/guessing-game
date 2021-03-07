import { actionTypes } from '../actions'
import { successReducer } from './'

const { GUESSED_SUCCESS } = actionTypes

describe('successReducer', () => {
  test('should return default prop success value `false`', () => {
    const newState = successReducer()
    expect(newState).toEqual({ success: false })
  })

  test('should return props success value `true`', () => {
    const newState = successReducer(true)
    expect(newState).toBe(true)
  })

  test('does have type of `GUESSED_SUCCESS`', () => {
    const newType = successReducer({ type: GUESSED_SUCCESS })
    expect(newType).toEqual({ type: GUESSED_SUCCESS })
  })
})
