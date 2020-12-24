const answerPhone = (answer) =>
  new Promise(function (resolve, reject) {
    setTimeout(
      answer ? resolve("Oi!") : reject("Infelizmente não podemos atender..."),
      3000
    );
  });

// answerPhone(true).then((response) => console.log(response))  
// answerPhone(false).catch((err) => console.log(err))

module.exports = answerPhone;
