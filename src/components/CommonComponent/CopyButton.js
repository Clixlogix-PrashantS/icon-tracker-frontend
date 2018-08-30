import React, { Component } from 'react';
import clipboard from 'clipboard'

class CopyButton extends Component {
  constructor(props) {
    super(props)
    this.clipboard = new clipboard('.clipboard-btn');
    this.timeout = 0
    this.state = {
      style: ''
    }
  }

  componentWillUnmount() {
    this.clipboard.destroy();
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    const { style } = this.state
    if (style !== 'on') {
      this.setState({ style: 'on' }, this.startTimeout)
    }
  }

  startTimeout = () => {
    this.timeout = setTimeout(() => {
      this.setState({ style: '' })
    }, 1000)
  }

  render() {
    const { data, title, isSpan, disabled } = this.props
    const { style } = this.state
    const text = style === 'on' ? 'Copy Complete' : title
    const Content = () => {
      if (isSpan) {
        return (
          <span
            className={`copy clipboard-btn ${style} ${disabled ? 'disabled' : ''}`}
            data-clipboard-text={data}
            onClick={this.handleClick}
          >
            {text}
          </span>
        )
      }
      else {
        return (
          <button
            className={`btn-type clipboard-btn ${style}`}
            data-clipboard-text={data}
            onClick={this.handleClick}
            disabled={disabled}
          >
            {text}
          </button>
        )
      }
    }

    return Content();
  }
}

export default CopyButton;