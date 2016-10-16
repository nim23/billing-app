import { combineReducers } from 'redux'
import callCharges from './callCharges'
import skyPackage from './skyPackage'
import skyStore from './skyStore'
import summary from './summary'
import app from './app'

const rootReducer = combineReducers({
  app,
  summary,
  skyPackage,
  callCharges,
  skyStore
})

export default rootReducer
