import React from 'react'
import Link from 'gatsby-link'
import { push } from 'gatsby-link'

class Exhibit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        exhibit : 'Sample'
      };
    }

    render() {
      return (
        <div className="page__exhibit">
          <p>We're still working on how to load and display exhibit profiles.</p>
          <p><Link to="/exhibits/rembrandt-van-rijn">View a sample profile</Link></p>
        <article className="exhibit">
        <div className="row">
            <div className="col-sm-4 exhibit-feature">
            </div>
            <div className="col-sm-8 exhibit-content">
                {/* <p>{this.state.exhibit}</p> */}
            </div>
        </div>
        </article>

        </div>
      );
    }
  }

  export default Exhibit;