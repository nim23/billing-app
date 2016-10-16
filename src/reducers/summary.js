import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import dateParser from '../utils/dateParser'
import costFormatter from '../utils/costFormatter'

const initialState = {
  statement: {},
  total: 0
}

export default function summary (state = initialState, action) {
  switch (action.type) {
    case FETCH_BILL_SUCCESS:
      let { statement, total } = action.body
      return Object.assign({}, state, {
        statement: {
          generated: dateParser(statement.generated),
          due: dateParser(statement.due),
          period: {
            from: dateParser(statement.period.from),
            to: dateParser(statement.period.to)
          }
        },
        total: costFormatter(total)
      })
    default:
      return state
  }
}
