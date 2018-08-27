import React from 'react'
import { Link, navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './header.css'

library.add(fab)

const Header = ({ siteTitle, arbitrary }) => (
  <div className="header">
    <h1 onClick={() => navigate('/')} className="headerText">
      Harrison Crawford
    </h1>
    <div className="socialLinkList">
      <a className="socialLink" href="https://github.com/arcadia-ego">
        <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
      </a>
      <a
        className="socialLink"
        href="https://www.linkedin.com/in/harrison-crawford/"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
      </a>
    </div>
    <h1 className="ribbon">
      <Link
        className="styledGatsbyLink"
        activeStyle={{
          margin: '30px',
          color: 'black',
          textDecoration: 'underline',
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
          textDecoration: 'underline',
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
          textDecoration: 'underline',
        }}
        to={'/projects/'}
      >
        Projects
      </Link>
      <Link
        className="styledGatsbyLink"
        activeStyle={{
          margin: '30px',
          color: 'black',
          textDecoration: 'underline',
        }}
        to={'/contact/'}
      >
        Contact
      </Link>
    </h1>

    <h1 className="ribbonPhone">
      <Link
        className="styledGatsbyLink"
        activeStyle={{
          margin: '30px',
          color: 'black',
          textDecoration: 'underline',
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
          textDecoration: 'underline',
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
          textDecoration: 'underline',
        }}
        to={'/projects/'}
      >
        Projects
      </Link>
      <Link
        className="styledGatsbyLink"
        activeStyle={{
          margin: '30px',
          color: 'black',
          textDecoration: 'underline',
        }}
        to={'/contact/'}
      >
        Contact
      </Link>
    </h1>
  </div>
)

export default Header
