import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
const initialState = {
  loading: true,
  error: false
}

export default function skyStore (state = initialState, action) {
  switch (action.type) {
    case FETCH_BILL_SUCCESS:
      return Object.assign({}, state, { loading: false })
    default:
      return state
  }
}
