const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}
// verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
// .then(value => console.log(value));

function sendJokeToFriend(name) {
    const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
      .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
      .then(console.log)
      .catch((err) => err);
    // console.log(message);
  }
  
  sendJokeToFriend("Anna")
