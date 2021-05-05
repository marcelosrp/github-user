import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import 'moment-timezone'

const Repos = ({ url, name, description, lastUpdated }) => {
  return (
    <div className="item">
      <h1>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h1>
      {description && <p>{description}</p>}
      <ul>
        <li>
          <strong>Última atualização:</strong>{' '}
          <Moment format="DD/MM/YYYY">{lastUpdated}</Moment>
        </li>
      </ul>
    </div>
  )
}

Repos.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  lastUpdated: PropTypes.string
}

export default Repos
