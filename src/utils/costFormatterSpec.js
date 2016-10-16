import costFormatter from './costFormatter'
import expect from 'expect'

describe('Price Formatter', () => {
  it('should format the price given a value', () => {
    expect(costFormatter(100.01)).toBe('£100.01')
  })
})
