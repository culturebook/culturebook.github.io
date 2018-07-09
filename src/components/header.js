import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="header">
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}

      <a href="/" role="button" className="link-reset burger--sm" id="js-menu-1">
          <img src="images/culturebook-small.svg" alt="C" className="hero-logo" width="9" /></a>

      <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

      <label className="js-menu icon icon-chevron-small icon-chevron-down icon-black hamburger-label" htmlFor="hamburger" role="button" title="Menu toggle" aria-labelledby="menu">&rsaquo;</label>

      <nav id="menu" className="menu">
          <ul className="nav nav-pills">
              <li><a href="/">Home</a></li>
              <li><a href="/profile">Profile</a></li>
          </ul>
      </nav>

  </header>
)

export default Header
