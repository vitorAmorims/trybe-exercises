/*
Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário. 
*/
const fetch = require('node-fetch');

const fetchWeatherForCity = async (city) => {
  if (city === undefined) {
    throw "City was not provided";
  }

  const response = await fetch(`http://api.trybe.com/weather/${city}`);
  const json = await response.json();

  if (json.weatherCondition === "rain") {
    return "🌧";
  } else if (json.weatherCondition === "cloud") {
    return "⛅️";
  } else if (json.weatherCondition === "sun") {
    return "🌞";
  } else {
    throw "Weather condition not found";
  }
};

module.exports = { fetchWeatherForCity };
