import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ReactTooltip from 'react-tooltip'
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

let open = faEnvelopeOpen
let closed = faEnvelopeSquare

class Header extends React.Component {
  state = {
    icon: closed,
    flag: 'none',
    copied: 'Click to copy!',
  }

  copyToClipboard = () => {
    let copyText = document.getElementById('email')
    copyText.select()
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
        <ReactTooltip
          id="content"
          getContent={() => {
            return this.state.copied
          }}
        />
        <div onClick={() => navigate('/')} className="headerText">
          Harrison Crawford
        </div>
        <div className="headerSub">Web Dev || Writer</div>
        <div className="socialLinkList">
          <a className="socialLink" href="https://github.com/arcadia-ego">
            <FontAwesomeIcon icon={['fab', 'github-square']} size="3x" />
          </a>

          <div onClick={() => this.switchIcons()} className="socialLink">
            <FontAwesomeIcon
              className="emailIcon"
              icon={this.state.icon}
              size="3x"
            />
          </div>

          <a
            className="socialLink"
            href="https://www.linkedin.com/in/harrison-crawford/"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
          </a>
        </div>
        <p id="email" style={{ display: this.state.flag }}>
          harrisoncrawf1@gmail.com{' '}
          <CopyToClipboard
            text={'harrisoncrawf1@gmail.com'}
            onCopy={() => this.setState({ copied: 'Copied to clipboard!' })}
          >
            <span style={{ margin: '5px' }}>
              <FontAwesomeIcon
                data-for="content"
                data-tip
                data-iscapture="true"
                icon={faClipboard}
                size="2x"
              />
            </span>
          </CopyToClipboard>
        </p>

        <h1 className="ribbon">
          <Link
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
