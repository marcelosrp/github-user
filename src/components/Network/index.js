import React from 'react'
import PropTypes from 'prop-types'

import { FaUsers, FaHeart } from 'react-icons/fa'

const Network = ({ followers, following }) => {
  return (
    <ul className="network">
      <li>
        <FaUsers /> {followers} followers
      </li>
      <li>
        <FaHeart /> {following} following
      </li>
    </ul>
  )
}

Network.propTypes = {
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired
}

export default Network
