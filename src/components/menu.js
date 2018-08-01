import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

let menuOpen = false;

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }

    checkboxFn = (event) => {
        if ( !event.target.checked ) {
            this.state = {
                isChecked: !this.state.isChecked,
            };
        }
    }

    componentDidUpdate() {
        this.state = {
            isChecked: false,
        };
    }

    render() {
      return (<input id="hamburger" className="hamburger-checkbox" type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange } onClick={this.checkboxFn} />);
    }
}

class Menu extends React.Component {

    render() {
        return (
            <div>
                <Checkbox />
                <label className="js-menu icon icon-chevron-small icon-chevron-down icon-black hamburger-label" htmlFor="hamburger" role="button" title="Menu toggle" aria-labelledby="menu">&rsaquo;</label>
                <nav id="menu" className="menu">
                    <ul className="nav nav-pills">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Culturebook</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu