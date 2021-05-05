import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, id, placeholder, user, handleChangeSearch }) => {
  return (
    <input
      className="input-default"
      type={type}
      name={id}
      id={id}
      value={user}
      placeholder={placeholder}
      onChange={(e) => handleChangeSearch(e.target)}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  user: PropTypes.string,
  handleChangeSearch: PropTypes.func.isRequired
}

export default Input
