import React from 'react'
import Link from 'gatsby-link'

import CultureSearch from '../components/CultureSearch'

const IndexPage = () => (
  <div>
    <header className="hero">
      <CultureSearch />
    </header>
    <section className="page">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/about/">read more about Culturebook</Link>
      <br />
      <Link to="/exhibits/">exhibits</Link>

    </section>
  </div>
)

export default IndexPage
