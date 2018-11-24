import React from 'react'
import { push } from 'gatsby-link'

class CultureSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {

      event.preventDefault();
      const term = encodeURIComponent(this.state.value);

      push({
        pathname: `/results?term=${term}`
      });

    }

    render() {
      return (
        <form onSubmit={this.handleSubmit} className="search">
          <label htmlFor="exhibit-search" className="visuallyhidden">Name:</label>
          <input id="exhibit-search" type="search" value={this.state.value} onChange={this.handleChange} placeholder="Add a search term" />
          <button type="submit" className="search__submit"><span className="visuallyhidden">Search</span><svg id="icon-search" viewBox="0 0 26 30" width="100%" height="100%"><path className="path1" fillRule="evenodd" d="M16.364 1.636q4.061 0 6.939 2.879t2.879 6.939-2.879 6.939-6.939 2.879q-2.879 0-5.242-1.515l-7.394 7.424q-0.636 0.636-1.545 0.636t-1.545-0.636-0.636-1.545 0.636-1.545l7.424-7.394q-1.515-2.364-1.515-5.242 0-4.061 2.879-6.939t6.939-2.879zM16.364 18q2.697 0 4.621-1.924t1.924-4.621-1.924-4.621-4.621-1.924-4.621 1.924-1.924 4.621 1.924 4.621 4.621 1.924z"></path></svg></button>
        </form>
      );
    }
  }

  export default CultureSearch;