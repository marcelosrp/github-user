import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, handleSearchUser, disabled }) => {
  return (
    <button
      className="btn-default"
      type="button"
      onClick={() => handleSearchUser()}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  handleSearchUser: PropTypes.func.isRequired
}

export default Button
