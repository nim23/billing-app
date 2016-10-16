import skyStore from './skyStore'
import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import expect from 'expect'
import costFormatter from '../utils/costFormatter'

describe('Sky Store Reducer', () => {
  it('should update the call logs', () => {
    const state = skyStore({}, {
      type: FETCH_BILL_SUCCESS,
      body: {
        skyStore: {
          rentals: [{cost: 10}, {cost: 20}],
          buyAndKeep: [{cost: 100}],
          total: 10
        }
      }
    })

    expect(state.rentals.length).toBe(2)
    expect(state.buyAndKeep.length).toBe(1)
    expect(state.rentals[0].cost).toBe(costFormatter(10))
    expect(state.rentals[1].cost).toBe(costFormatter(20))
    expect(state.buyAndKeep[0].cost).toBe(costFormatter(100))
    expect(state.total).toBe(costFormatter(10))
  })
})
