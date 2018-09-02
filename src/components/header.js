import React from 'react'
import { Link, navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeSquare,
  faEnvelopeOpen,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './header.css'
library.add(fab)

let icon = faEnvelopeSquare
let open = faEnvelopeOpen
let closed = faEnvelopeSquare
let flag = 'none'

class Header extends React.Component {
  state = {
    icon: closed,
    flag: 'none',
  }

  copyToClipboard = () => {
    let copyText = document.getElementsByClassName('email')
    console.log("copyText", copyText[0].textContent)
    copyText[0].textContent.select()
    document.execCommand('copy')
  }

  switchIcons = () => {
    if (this.state.icon === open) {
      this.setState({ icon: closed })
      this.setState({ flag: 'none' })
    } else {
      this.setState({ flag: 'block' })
      this.setState({ icon: open })
    }
  }

  render() {
    return (
      <div className="header">
        <h1 onClick={() => navigate('/')} className="headerText">
          Harrison Crawford
        </h1>
        <div className="socialLinkList">
          {console.log('switch', icon)}
          <a className="socialLink" href="https://github.com/arcadia-ego">
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
          </a>

          <div onClick={() => this.switchIcons()} className="socialLink">
            <FontAwesomeIcon icon={this.state.icon} size="3x" />
          </div>

          <a
            className="socialLink"
            href="https://www.linkedin.com/in/harrison-crawford/"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
          </a>
        </div>
        <p className="email" style={{ display: this.state.flag }}>
          harrisoncrawf1@gmail.com{' '}
          <span
            onClick={this.copyToClipboard}
            style={{ margin: '5px' }}
            value="harrisoncrawf1@gmail.com"
          >
            <FontAwesomeIcon icon={faClipboard} size="2x" />
          </span>
        </p>
        <h1 className="ribbon">
          <Link
            onClick={window.scrollTo(0, 0)}
            className="styledGatsbyLink"
            activeStyle={{
              margin: '30px',
              color: 'black',
              borderBottom: '2px solid black',
            }}
            to={'/about/'}
          >
            About
          </Link>
          <Link
            onClick={window.scrollTo(0, 0)}
            className="styledGatsbyLink"
            activeStyle={{
              margin: '30px',
              color: 'black',
              borderBottom: '2px solid black',
            }}
            to={'/blog/'}
          >
            Blog{' '}
          </Link>
          <Link
            onClick={window.scrollTo(0, 0)}
            className="styledGatsbyLink"
            activeStyle={{
              margin: '30px',
              color: 'black',
              borderBottom: '2px solid black',
            }}
            to={'/projects/'}
          >
            Projects
          </Link>
        </h1>

        <h1 className="ribbonPhone">
          <Link
            className="styledGatsbyLink"
            activeStyle={{
              margin: '30px',
              color: 'black',
              borderBottom: '2px solid black',
              paddingBottom: '0.3px',
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
              borderBottom: '2px solid black',
              paddingBottom: '0.3px',
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
              borderBottom: '2px solid black',
              paddingBottom: '0.3px',
            }}
            to={'/projects/'}
          >
            Projects
          </Link>
        </h1>
      </div>
    )
  }
}

export default Header
