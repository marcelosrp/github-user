import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  type,
  id,
  placeholder,
  user,
  handleChangeSearch,
  handleKeyPress
}) => {
  return (
    <input
      className="input-default"
      type={type}
      name={id}
      id={id}
      value={user}
      placeholder={placeholder}
      onChange={(e) => handleChangeSearch(e.target)}
      onKeyPress={(e) => handleKeyPress(e)}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  user: PropTypes.string,
  handleChangeSearch: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func
}

export default Input
