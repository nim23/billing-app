import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CallCharges from '../components/CallCharges/CallCharges'
import SkyPackage from '../components/SkyPackage/SkyPackage'
import SkyStore from '../components/SkyStore/SkyStore'
import Summary from '../components/Summary/Summary'
import Loader from '../components/Loader/Loader'

export class App extends Component {
  render () {
    return (
      <div className='application'>
        {this.props.loading && <Loader />}
        {!this.props.loading &&
          <div className='container'>
            <Summary
              total={this.props.summary.total}
              due={this.props.summary.statement.due}
              from={this.props.summary.statement.period.from}
              to={this.props.summary.statement.period.to}
              generated={this.props.summary.statement.generated} />
            <SkyPackage {...this.props.skyPackage} />
            <SkyStore {...this.props.skyStore} />
            <CallCharges {...this.props.callCharges} />
          </div>}
      </div>
    )
  }
}

App.propTypes = {
  callCharges: PropTypes.object.isRequired,
  skyPackage: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  skyStore: PropTypes.object.isRequired,
  summary: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    loading: state.app.loading,
    summary: state.summary,
    error: state.app.error,
    skyPackage: state.skyPackage,
    callCharges: state.callCharges,
    skyStore: state.skyStore
  }
}

export default connect(
  mapStateToProps
)(App)
