import CallCharges from './CallCharges'
import { mount } from 'enzyme'
import expect from 'expect'
import React from 'react'

describe('.CallCharges', () => {
  it('shoudl display the headers for the table', () => {
    const wrapper = mount(<CallCharges calls={[]} />)
    expect(wrapper.find('.table--header').at(0).text()).toBe('Telephone No')
    expect(wrapper.find('.table--header').at(1).text()).toBe('Duration')
    expect(wrapper.find('.table--header').at(2).text()).toBe('Charge')
  })

  it('should display the call charges', () => {
    const mockCallCharges = [{ called: 123456, cost: '£5.00', duration: '00:12:01' }]
    const wrapper = mount(<CallCharges calls={mockCallCharges} />)
    expect(wrapper.find('.table--column').at(0).text()).toBe(mockCallCharges[0].called.toString())
    expect(wrapper.find('.table--column').at(1).text()).toBe(mockCallCharges[0].duration)
    expect(wrapper.find('.table--column').at(2).text()).toBe(mockCallCharges[0].cost)
  })
})
