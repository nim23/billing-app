import React from 'react'
import Summary from './Summary'
import { mount } from 'enzyme'
import expect from 'expect'

describe('Summary Component Test', () => {
  it('should display the total amount', () => {
    const mockTotal = 136.03
    const wrapper = mount(<Summary
      total={mockTotal} />)
    expect(wrapper.find('.summary--row-value').at(0).text())
      .toEqual(mockTotal)
  })

  it('should display the due date', () => {
    const mockDue = '12 Januray 2016'
    const wrapper = mount(<Summary
      due={mockDue}
    />)
    expect(wrapper.find('.summary--row-value').at(2).text().trim())
      .toBe(mockDue)
  })

  it('should display bill generated date', () => {
    const mockGenerated = '5 January 2016'
    const wrapper = mount(<Summary
      generated={mockGenerated}
    />)
    expect(wrapper.find('.summary--row-value').at(1).text().trim())
      .toBe(mockGenerated)
  })

  it('should show the bill period', () => {
    const mockFrom = '1 December 2015'
    const mockTo = '31 December 2015'
    const wrapper = mount(<Summary
      from={mockFrom}
      to={mockTo}
    />)
    expect(wrapper.find('.summary--row-value').at(3).text().trim())
      .toBe(mockFrom)
    expect(wrapper.find('.summary--row-value').at(4).text().trim())
      .toBe(mockTo)
  })
})
