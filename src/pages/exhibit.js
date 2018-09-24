import React from 'react'
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

        <article className="exhibit">
        <div className="row">
            <div className="col-sm-4 exhibit-feature">

            </div>
            <div className="col-sm-8 exhibit-content">
                <p>{this.state.exhibit}</p>
            </div>
        </div>
        </article>

        </div>
      );
    }
  }

  export default Exhibit;