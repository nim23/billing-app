import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import costFormatter from '../utils/costFormatter'

const initialState = {
  subscriptions: [],
  total: 0
}

const formatSubscriptonsCharge = (subscriptions) => {
  return subscriptions.map(subscription => {
    return Object.assign({}, subscription, {
      cost: costFormatter(subscription.cost)
    })
  })
}

export default function skyPackage (state = initialState, action) {
  switch (action.type) {
    case FETCH_BILL_SUCCESS:
      let { package: skyPackage } = action.body
      return Object.assign({}, state, {
        subscriptions: formatSubscriptonsCharge(skyPackage.subscriptions),
        total: costFormatter(skyPackage.total)
      })
    default:
      return state
  }
}
