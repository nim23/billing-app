import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import './_panel.scss'

export default class Panel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showContent: true
    }
    this.onToggleClick = this.onToggleClick.bind(this)
  }

  onToggleClick (event) {
    event.preventDefault()
    this.setState({
      showContent: !this.state.showContent
    })
  }

  render () {
    const panelToggleClass = classNames({
      'panel--toggle-open': this.state.showContent,
      'panel--toggle-closed': !this.state.showContent
    })

    const panelContentClass = classNames({
      'panel--content': this.state.showContent,
      'panel--content-hidden': !this.state.showContent
    })
    return (
      <div className='panel'>
        <button className='panel--toggle'
          aria-expanded={this.state.showContent}
          onClick={this.onToggleClick}>
          <h2 className='panel--title'>{this.props.title}</h2>
          <h2 className='panel--subtitle'>{this.props.subtitle}</h2>
          <span className={panelToggleClass} />
        </button>
        <div className={panelContentClass}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Panel.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
