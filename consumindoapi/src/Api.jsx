import React, { Component } from 'react';

class Api extends Component {
    constructor(props) {
        super(props);
        this.fetchDogs = this.fetchDogs.bind(this);
        this.state = {
            data: ''
        }
    }
    componentDidMount() {

    }
    async fetchDogs() {
        const requestReturn = await fetch("https://dog.ceo/api/breeds/image/random");
        const requestObject = await requestReturn.json();
        console.log(requesObject)
    }
    render() {
        return
    }
}

export default Api;