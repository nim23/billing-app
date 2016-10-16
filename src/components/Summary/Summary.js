import React, { PropTypes } from 'react'
import './_summary.scss'

const summaryRow = (attribute, value) => {
  return (
    <div className='summary--row'>
      <span className='summary--row-attribute'>{attribute} :</span>
      <span className='summary--row-value'>{` ${value}`}</span>
    </div>
  )
}

const Summary = props => {
  return (
    <section className='summary'>
      <h2 className='summary--title'>Latest Bill</h2>
      {summaryRow('Total', props.total)}
      {summaryRow('Generated', props.generated)}
      {summaryRow('Due', props.due)}
      {summaryRow('From', props.from)}
      {summaryRow('To', props.to)}
    </section>
  )
}

Summary.propTypes = {
  total: PropTypes.number.isRequired,
  generated: PropTypes.string.isRequired,
  due: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default Summary
