import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import Panel from './panel'

describe('.Panel', () => {
  it('should show/hide the content when toggled', () => {
    const wrapper = mount(
      <Panel title='title'>
        <span>content</span>
      </Panel>
    )
    wrapper.find('.panel--toggle').simulate('click')
    expect(wrapper.state('showContent')).toBe(false)
    wrapper.find('.panel--toggle').simulate('click')
    expect(wrapper.state('showContent')).toBe(true)
    expect(wrapper.find('.panel--content').text()).toBe('content')
  })
})
