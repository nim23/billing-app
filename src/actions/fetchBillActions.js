import 'isomorphic-fetch'
import * as actionTypes from '../constants/actionTypes'

function fetchBillSuccess (body) {
  return {
    type: actionTypes.FETCH_BILL_SUCCESS,
    body
  }
}

function fetchBillFailure (ex) {
  return {
    type: actionTypes.FETCH_BILL_ERROR,
    ex
  }
}

export function fetchBill () {
  return dispatch => {
    return fetch('https://still-scrubland-9880.herokuapp.com/bill.json')
      .then(res => res.json())
      .then(json => {
        dispatch(fetchBillSuccess(json))
      })
      .catch(ex => dispatch(fetchBillFailure(ex)))
  }
}
