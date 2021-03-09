import { guessedSuccess } from './'

describe('guessedSuccess', () => {
  test('returns an action with type `GUESSED_SUCCESS`', () => {
    const action = guessedSuccess()
    expect(action).toEqual({ type: 'GUESSED_SUCCESS' })
  })
})
