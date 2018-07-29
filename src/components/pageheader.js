import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

class PageHeader extends React.Component {

    render( siteTitle ) {
        return (
            <section className="pageheader">
                <h1>Page title</h1>
            </section>
        )
    }
}

export default PageHeader