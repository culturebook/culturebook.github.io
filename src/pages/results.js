import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types";
import Helmet from 'react-helmet'

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exhibits: [],
            exhibit: '',
            searchTerm: ''
        };
    }

    // processEuropeanaSearch(json) {

    //     fetch(json)
    //         .then(function (response) {

    //             // Get JSON response
    //             return response.json();

    //         }).then(function (myJson) {

    //             const profilesArray = Array.from(myJson.items);
    //             return profilesArray;

    //         })
    //         .catch(function (err) {
    //             console.error(err);
    //         });
    // }

    componentDidMount() {

        let url = `https://www.europeana.eu/api/v2/search.json?wskey=L6424KAMT&query=${this.props.location.state.key}`;

        //this.processEuropeanaSearch(url);

        fetch(url)
            .then((response) => {

                // Get JSON response
                return response.json();

            }).then((myJson) => {

                const profilesArray = Array.from(myJson.items);
                this.setState({exhibits: profilesArray});

            }).catch((err) => {
                console.error(err);
            });

    }

    // goToExhibit(event) {
    //     event.preventDefault();
    //     this.setState({exhibit: event.target.dataset.title});
    //     console.log('clicked');
    // }

    renderItems = (key) => {

        let obj = this.state.exhibits;
        let exhibit = obj[key];

        if ( exhibit ) {

            return (
                <li key={key}>
                    <Link to={{
                        pathname: '/exhibit',
                        state: { message: 'parsed state'}
                        }}>
                    <div className="card">
                        <img className="card-img-top" src={exhibit.edmPreview} alt={exhibit.title} /><div className="card-body">
                        <h5 className="card-title">{exhibit.title}</h5>
                        </div>
                    </div>
                    </Link>
                </li>
            )

        }
    }

    render() {

        let object = Object.keys(this.state.exhibits);

        return (
            <div className="page">
                <Helmet title={ `Results for: ${this.state.searchTerm}` } />
                <h1>Results</h1>
                <ul id="result">
                { object.map( this.renderItems )}
                </ul>
            </div>
        )
    }
}

export default Results
