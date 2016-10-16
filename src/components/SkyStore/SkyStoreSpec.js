import SkyStore from './SkyStore'
import { shallow } from 'enzyme'
import expect from 'expect'
import React from 'react'
import Panel from '../Panel/Panel'

describe('.SkyStore', () => {
  it('should display the total on panel', () => {
    const wrapper = shallow(<SkyStore
      total='10'
      rentals={[]}
      buyAndKeep={[]} />)
    expect(wrapper.find(Panel).prop('subtitle')).toEqual('Total: 10')
  })

  it('should display the title on panel', () => {
    const wrapper = shallow(<SkyStore
      total='10'
      rentals={[]}
      buyAndKeep={[]} />)
    expect(wrapper.find(Panel).prop('title')).toBeA('string')
  })

  it('should display the rental', () => {
    const mockRentals = [{
      title: 'Batman And Robin',
      cost: 4.99
    }]
    const wrapper = shallow(<SkyStore
      total='10'
      rentals={mockRentals}
      buyAndKeep={[]} />)
    expect(wrapper.find('.store--transaction').at(0).text())
      .toBeA('string')
    expect(wrapper.find('.movie--title').at(0).text())
      .toBe(mockRentals[0].title)
    expect(wrapper.find('.movie--cost').at(0).text())
      .toEqual(mockRentals[0].cost)
  })

  it('should display the buy and Keep', () => {
    const mockBuyAndKeep = [{
      title: 'Batman And Robin',
      cost: 4.99
    }]
    const wrapper = shallow(<SkyStore
      total='10'
      rentals={[]}
      buyAndKeep={mockBuyAndKeep} />)
    expect(wrapper.find('.store--transaction').at(0).text())
      .toBeA('string')
    expect(wrapper.find('.movie--title').at(0).text())
      .toBe(mockBuyAndKeep[0].title)
    expect(wrapper.find('.movie--cost').at(0).text())
      .toEqual(mockBuyAndKeep[0].cost)
  })
})
