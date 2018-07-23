import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({data}) => (
  <div>
    <h1>About page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage