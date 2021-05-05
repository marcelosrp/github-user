import React from 'react'
import PropTypes from 'prop-types'

import {
  FaRegBuilding,
  FaMapMarker,
  FaRegEnvelope,
  FaLink,
  FaTwitter
} from 'react-icons/fa'

const LinksUser = ({ company, location, email, blog, twitter }) => {
  return (
    <ul className="links-user">
      {company && (
        <li>
          <FaRegBuilding /> {company}
        </li>
      )}
      {location && (
        <li>
          <FaMapMarker /> {location}
        </li>
      )}
      {email && (
        <li>
          <FaRegEnvelope /> {email}
        </li>
      )}
      {blog && (
        <li>
          <FaLink />{' '}
          <a href={blog} target="_blank" rel="noreferrer">
            site
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <FaTwitter />{' '}
          <a
            href={`https://www.twitter.com/${twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            @{twitter}
          </a>
        </li>
      )}
    </ul>
  )
}

LinksUser.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  blog: PropTypes.string,
  twitter: PropTypes.string
}

export default LinksUser
