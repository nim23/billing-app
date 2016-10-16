import app from './app'
import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import expect from 'expect'

describe('App Reducer', () => {
  it('should update the call logs', () => {
    const state = app(undefined, {
      type: FETCH_BILL_SUCCESS
    })

    expect(state.loading).toBe(false)
    expect(state.error).toBe(false)
  })
})
