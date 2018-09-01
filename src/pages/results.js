import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types";

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exhibits: ''
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
        let param = new URLSearchParams(document.location.search.substring(1));
        let term = param.get("term");
        let url = `https://www.europeana.eu/api/v2/search.json?wskey=L6424KAMT&query=${term}`;

        //this.processEuropeanaSearch(url);

        fetch(url)
            .then((response) => {

                // Get JSON response
                return response.json();

            }).then((myJson) => {

                const profilesArray = Array.from(myJson.items);
                console.log(profilesArray);
                this.setState({exhibits: profilesArray});

            }).catch((err) => {
                console.error(err);
            });

    }

    render() {

        let object = Object.keys(this.state.exhibits);
        let content = object.map(function(key){
            return (
                <li key={key}>
                    <span>{key} - Title</span>
                </li>
            )
        })

        return (
            <div className="page">
                <h1>Results</h1>
                <ul>
                { content }
                </ul>
            </div>
        )
    }
}

export default Results
