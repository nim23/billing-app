import summary from './summary'
import { FETCH_BILL_SUCCESS } from '../constants/actionTypes'
import expect from 'expect'
import dateParser from '../utils/dateParser'
import costFormatter from '../utils/costFormatter'

describe('Summary Reducer', () => {
  it('should update the summary', () => {
    const mockStatement = {
      'generated': '2015-01-11',
      'due': '2015-01-25',
      'period': {
        'from': '2015-01-26',
        'to': '2015-02-25'
      }
    }

    const mockTotal = 100

    const state = summary({}, {
      type: FETCH_BILL_SUCCESS,
      body: {
        statement: mockStatement,
        total: mockTotal
      }
    })
    expect(state.total).toBe(costFormatter(mockTotal))
    expect(state.statement).toEqual({
      generated: dateParser(mockStatement.generated),
      due: dateParser(mockStatement.due),
      period: {
        from: dateParser(mockStatement.period.from),
        to: dateParser(mockStatement.period.to)
      }
    })
  })
})
