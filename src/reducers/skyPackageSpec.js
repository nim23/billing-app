import skyPackage from './skyPackage'
import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import expect from 'expect'
import costFormatter from '../utils/costFormatter'

describe('Sky Packages Reducer', () => {
  it('should update the call logs', () => {
    const state = skyPackage({}, {
      type: FETCH_BILL_SUCCESS,
      body: {
        package: {
          subscriptions: [{cost: 10}, {cost: 20}],
          total: 10
        }
      }
    })
    expect(state.subscriptions.length).toBe(2)
    expect(state.subscriptions[1].cost).toBe(costFormatter(20))
    expect(state.total).toBe(costFormatter(10))
  })
})
