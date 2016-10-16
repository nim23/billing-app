import React, { PropTypes } from 'react'
import Panel from '../Panel/Panel'
import './_skyStore.scss'

const movie = (movie, index) => {
  return (
    <li className='movie' key={index}>
      <span className='movie--icon' />
      <span className='movie--title'>{movie.title}</span>
      <span className='movie--cost'>{movie.cost}</span>
    </li>)
}

const movieList = (list, title) => {
  return (
    <ul className='store'>
      <h3 className='store--transaction'>{title}</h3>
      {list.map(movie)}
    </ul>
  )
}

const SkyStore = (props) => {
  return (
    <Panel title='Sky Store'
      subtitle={`Total: ${props.total}`}>
      {movieList(props.rentals, 'Rentals')}
      {movieList(props.buyAndKeep, 'Buy And Keep')}
    </Panel>
  )
}

SkyStore.propTypes = {
  total: PropTypes.string.isRequired,
  rentals: PropTypes.array.isRequired,
  buyAndKeep: PropTypes.array.isRequired
}

export default SkyStore
