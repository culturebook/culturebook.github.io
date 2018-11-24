import React from 'react';
import Link from 'gatsby-link'

const Footer = (props) => {

    return (

            <footer className="f-main">

                <section>

                    <ul className="nav nav-pills">
                        <li>
                        <Link to="/">Culturebook Search</Link>
                        </li>
                        <li>
                        <Link to="/about/">About Culturebook</Link>
                        </li>
                    </ul>

                {/* <Link to="/exhibits/">exhibits</Link> */}

                <div className="f-social-links">
                    <a href="https://twitter.com/culturebook" rel="noreferrer noopener" target="_blank">
                    <svg id="icon-twitter" viewBox="0 0 26 30" width="100%" height="100%"><path className="path1" fillRule="evenodd" d="M13.091 1.636q5.424 0 9.258 3.833t3.833 9.258-3.833 9.258-9.258 3.833-9.258-3.833-3.833-9.258 3.833-9.258 9.258-3.833zM21.061 11.848q1-0.697 1.848-1.909-1.091 0.455-2.152 0.576 1.182-0.667 1.606-2.061-1.121 0.636-2.333 0.909-1.091-1.182-2.697-1.182-1.545 0-2.621 1.091t-1.076 2.636q0 0.455 0.091 0.848-4.697-0.242-7.697-3.909-0.485 0.909-0.485 1.879 0 2 1.636 3.091-0.848 0-1.667-0.455v0.030q0 1.333 0.848 2.364t2.121 1.303q-0.394 0.121-0.97 0.121-0.273 0-0.697-0.061 0.333 1.121 1.288 1.803t2.167 0.712q-2.152 1.697-4.606 1.697-0.333 0-0.879-0.061 2.515 1.636 5.697 1.636 2.455 0 4.515-0.955t3.348-2.5 2-3.394 0.712-3.727v-0.485z"></path>
      </svg></a>

                </div>

                </section>

            </footer>

    )

}

export default Footer;