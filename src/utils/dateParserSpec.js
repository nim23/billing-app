import dateParser from './dateParser'
import expect from 'expect'

describe('Date Praser', () => {
  it('should return the date "YYYY-MM-DD" in "DD month YYYY"', () => {
    expect(dateParser('2015-01-11')).toBe('11 January 2015')
  })
})
