import SkyPackage from './SkyPackage'
import { mount, shallow } from 'enzyme'
import expect from 'expect'
import React from 'react'
import Panel from '../Panel/Panel'

describe('.SkyPackage', () => {
  it('should display the total on panel', () => {
    const wrapper = shallow(<SkyPackage
      total='10'
      subscriptions={[]} />)
    expect(wrapper.find(Panel).prop('subtitle')).toEqual('Total: 10')
  })

  it('should display the title on panel', () => {
    const wrapper = shallow(<SkyPackage
      total='10'
      subscriptions={[]} />)
    expect(wrapper.find(Panel).prop('title')).toBeA('string')
  })

  it('should display the subscription details', () => {
    const mockSubscriptions = [
      {
        'type': 'tv',
        'name': 'Variety with Movies HD',
        'cost': 50
      }
    ]
    const wrapper = mount(<SkyPackage total='10'
      subscriptions={mockSubscriptions} />)

    expect(wrapper.find('.subscription--name').at(0).text()).toEqual(mockSubscriptions[0].name)
    expect(wrapper.find('.subscription--cost').at(0).text()).toEqual(`Charge: ${mockSubscriptions[0].cost}`)
  })
})
