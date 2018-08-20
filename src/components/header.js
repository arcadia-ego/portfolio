import React from 'react'
import { Link, navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPoop } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Anime from 'react-anime'
import './header.css'

library.add(fab)
const Header = ({ siteTitle, arbitrary }) => (
  <div className="header">
    <h1 onClick={() => navigate('/')} className="headerText">
      Harrison Crawford
    </h1>
    <div className="socialLinkList">
      <a className="socialLink" href="https://github.com/arcadia-ego">
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
      </a>
      <a className="socialLink" href="https://www.linkedin.com/in/harrison-crawford/">
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
      </a>
    </div>
    <h1 className="ribbon">
      <Link
        className="styledGatsbyLink"
        activeStyle={{
          margin: '30px',
          color: 'black',
        }}
        to={'/about/'}
      >
        About
      </Link>
      <Link
        className="styledGatsbyLink"
        activeStyle={{
          margin: '30px',
          color: 'black',
        }}
        to={'/blog/'}
      >
        Blog
      </Link>
      <Link
        className="styledGatsbyLink"
        activeStyle={{
          margin: '30px',
          color: 'black',
        }}
        to={'/contact/'}
      >
        Contact
      </Link>
      <Link
        className="styledGatsbyLink"
        activeStyle={{
          margin: '30px',
          color: 'black',
        }}
        to={'/projects/'}
      >
        Projects
      </Link>
    </h1>
  </div>
)

export default Header
