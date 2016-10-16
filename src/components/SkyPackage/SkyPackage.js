import React, { PropTypes } from 'react'
import Panel from '../Panel/Panel'
import './_skyPackage.scss'
import classNames from 'classnames'

const getIconClass = type => classNames({
  [`subscription--${type}`]: true
})

const SkyPackage = (props) => {
  return (
    <Panel title={'Package'} subtitle={`Total: ${props.total}`}>
      <ul className='package'>
        {props.subscriptions.map(({type, name, cost}, index) => {
          return (
            <li className='subscription' key={index}>
              <span className={getIconClass(type)} />
              <span className='subscription--name'>{name}</span>
              <span className='subscription--cost'>Charge: {cost}</span>
            </li>)
        })}
      </ul>
    </Panel>
  )
}

SkyPackage.propTypes = {
  subscriptions: PropTypes.array.isRequired,
  total: PropTypes.string.isRequired
}

export default SkyPackage
