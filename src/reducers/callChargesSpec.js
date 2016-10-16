import callCharges from './callCharges'
import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import expect from 'expect'
import costFormatter from '../utils/costFormatter'

describe('Call calls Reducer', () => {
  it('should update the call logs', () => {
    const state = callCharges({}, {
      type: FETCH_BILL_SUCCESS,
      body: {
        callCharges: {
          calls: [{cost: 10}, {cost: 20}],
          total: 10
        }
      }
    })
    expect(state.calls.length).toBe(2)
    expect(state.calls[0].cost).toBe(costFormatter(10))
    expect(state.calls[1].cost).toBe(costFormatter(20))
    expect(state.total).toBe(costFormatter(10))
  })
})
