import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ src, alt, width, height }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} className="avatar" />
  )
}

Avatar.defaultProps = {
  alt: 'Avatar'
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Avatar
