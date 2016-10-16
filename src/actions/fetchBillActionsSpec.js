import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './fetchBillActions'
import fetchMock from 'fetch-mock'
import * as types from '../constants/actionTypes'
import expect from 'expect'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Fetch Bill Actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should fire FETCH_BILL_SUCCESS when fetching bill has been done', () => {
    fetchMock.get('*',
      { body: { statement: {} } })

    const expectedActions = [
      { type: types.FETCH_BILL_SUCCESS, body: { statement: {} } }
    ]
    const store = mockStore({ statement: [] })

    return store.dispatch(actions.fetchBill())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
