import React, {PropTypes} from 'react'
import Panel from '../Panel/Panel'
import './_callCharges.scss'

const tableHeader = () => {
  return (
    <tr>
      <th className='table--header'>
        Telephone No
      </th>
      <th className='table--header'>
        Duration
      </th>
      <th className='table--header'>
        Charge
      </th>
    </tr>
  )
}

const tableRow = (calls) => {
  return calls.map(({called, duration, cost}, index) => {
    return (
      <tr key={index} className='table--row'>
        <td className='table--column'>
          {called}
        </td>
        <td className='table--column'>
          {duration}
        </td>
        <td className='table--column'>
          {cost}
        </td>
      </tr>)
  })
}

const callsTable = calls => {
  return (
    <table tabIndex={0} className='table'>
      <tbody>
        {tableHeader()}
        {tableRow(calls)}
      </tbody>
    </table>
  )
}

const CallCharges = (props) => {
  return (
    <Panel title='Call Charges' subtitle={`Total: ${props.total}`}>
      {callsTable(props.calls)}
    </Panel>
  )
}

CallCharges.propTypes = {
  total: PropTypes.string.isRequired,
  calls: PropTypes.array.isRequired
}

export default CallCharges
