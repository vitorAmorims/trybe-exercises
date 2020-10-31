const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
    const response = await fetch(API_URL,{ headers: { Accept: 'application/json' }});
    const json = response.json();
    return json;
//   return fetch(API_URL, { headers: { Accept: 'application/json' }})
//     .then(response => response.json())
//     .then(data => data.joke);
};

// fetchJoke().then((data) => console.log(data));
// fetchJoke().then((data) => console.log(data))

module.exports = { fetchJoke };