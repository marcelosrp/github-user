import React from 'react'
import PropTypes from 'prop-types'

const Bio = ({ fullname, username, url, bio }) => {
  return (
    <div className="bio">
      <h1 className="bio__title">{fullname}</h1>
      <a href={url} target="_blank" rel="noreferrer" className="bio__username">
        @{username}
      </a>
      {bio && <p className="bio__textbio">{bio}</p>}
    </div>
  )
}

Bio.propTypes = {
  fullname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bio: PropTypes.string
}

export default Bio
