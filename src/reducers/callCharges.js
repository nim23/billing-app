import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import costFormatter from '../utils/costFormatter'

const initialState = {
  calls: [],
  total: 0
}

const formatCallsCharge = (calls) => {
  return calls.map(call => {
    return Object.assign({}, call, {
      cost: costFormatter(call.cost)
    })
  })
}

export default function callCharges (state = initialState, action) {
  switch (action.type) {
    case FETCH_BILL_SUCCESS:
      let { callCharges } = action.body
      return Object.assign({}, state, {
        calls: formatCallsCharge(callCharges.calls),
        total: costFormatter(callCharges.total)
      })
    default:
      return state
  }
}
