function divPor23510(number) {
    let resultEx3 = [];
    let divisores = [2,3,5,10];
    for (let i = 0; i < divisores.length; i++) {
        resultEx3.push(number/divisores[i])
    }
    return resultEx3;
}


const ex2 = new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 50 + 1))
    }
    console.log("Números aleatórios "+numbers)
    const newNumbers = numbers.map(number => number * 3);
    console.log("Números multiplicados por 3 "+ newNumbers)
    const total = newNumbers.reduce((acc,element) => acc + element);
    console.log("Total dos Elementos: "+ total)
    if (total < 800) {
        resolve(divPor23510(total));
    } else {
        reject("O total dos elementos supera 800! Essa promise deve estar quebrada!")
    }
    return total;
})

const maiorQue200 = (param) => {
    let result = [];
    for (let i = 0; i < param.length; i++) {
        if (param[i] > 200) {
            result.push(param[i]);
        }
    }
    return result;
}

ex2
.then(maiorQue200)
.then(console.log)
.catch((err) => console.log(err))
