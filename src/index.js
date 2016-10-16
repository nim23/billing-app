import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { fetchBill } from './actions/fetchBillActions'
import './styles/_main.scss'

import { configureStore } from './store/configureStore'
import { Root } from './containers/Root'

const store = configureStore()

store.dispatch(fetchBill())

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
