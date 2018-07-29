import React from 'react'
import Link from 'gatsby-link'
import Menu from '../components/menu'

const Header = ({ siteTitle }) => (

  <header id="header" className="header">
    <a className="sr-only screen-reader-only-focusable skip-to-content" data-hook="skip-to-content" href="#site-content">Skip to content</a>

    <Link to="/" role="button" className="link-reset burger--sm" id="js-menu-1">
    <img src="/images/culturebook-small.svg" alt="C" className="hero-logo" width="9" /></Link>

    <Menu />

  </header>
)

export default Header
