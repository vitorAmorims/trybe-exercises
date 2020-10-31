const fetch = require("node-fetch");

const fetchDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const json = response.json();
  return json;
};

module.exports = { fetchDogs };