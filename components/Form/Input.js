import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  render() {
    const {
      labelClass,
      labelContent,
      iconPosition,
      inputIcon,
      inputClass,
      inputType,
      placeholder,
      helpClass,
      helpContent
    } = this.props

    return (
      <div className="field">
        <label className={`label ${labelClass}`}>{labelContent}</label>
        <div className={`control ${iconPosition}`}>
          {inputIcon &&
            <span className="icon is-small is-left">
              <i className={`fa ${inputIcon}`}></i>
            </span>
          }
          <input className={`input ${inputClass}`} type={inputType} placeholder={placeholder} />
        </div>
        <p className={`help ${helpClass}`}>{helpContent}</p>
      </div>
    )
  }
}

Input.propTypes = {
  labelClass: PropTypes.string,
  labelContent: PropTypes.string,
  iconPosition: PropTypes.string,
  inputIcon: PropTypes.string,
  inputClass: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  helpClass: PropTypes.string,
  helpContent: PropTypes.string
}
