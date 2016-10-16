import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import costFormatter from '../utils/costFormatter'
const initialState = {
  rentals: [],
  buyAndKeep: [],
  total: 0
}

const formatTransactionCharges = (transactions) => {
  return transactions.map(transaction => {
    return Object.assign({}, transaction, {
      cost: costFormatter(transaction.cost)
    })
  })
}

export default function skyStore (state = initialState, action) {
  switch (action.type) {
    case FETCH_BILL_SUCCESS:
      let { skyStore } = action.body
      return Object.assign({}, state, {
        rentals: formatTransactionCharges(skyStore.rentals),
        buyAndKeep: formatTransactionCharges(skyStore.buyAndKeep),
        total: costFormatter(skyStore.total)
      })
    default:
      return state
  }
}
