/*
9- Implemente a função animalMap:
Sem parâmetros, retorna animais categorizados por localização
Com a opção includeNames: true especificada, retorna nomes de animais
Com a opção sorted: true especificada, retorna nomes de animais ordenados
Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea
Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
Só retorna informações ordenadas e com sexo se a opção includeNames: true for especificada
*/
const animals = [
    {
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12
        },
        {
          name: 'Maxwell',
          sex: 'male',
          age: 15
        },
        {
          name: 'Faustino',
          sex: 'male',
          age: 7
        },
        {
          name: 'Dee',
          sex: 'female',
          age: 14
        }
      ]
    },
    {
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Shu',
          sex: 'female',
          age: 19
        },
        {
          name: 'Esther',
          sex: 'female',
          age: 17
        }
      ]
    },
    {
      id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
      name: 'bears',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Hiram',
          sex: 'male',
          age: 4
        },
        {
          name: 'Edwardo',
          sex: 'male',
          age: 4
        },
        {
          name: 'Milan',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Joe',
          sex: 'male',
          age: 10
        },
        {
          name: 'Tad',
          sex: 'male',
          age: 12
        },
        {
          name: 'Keri',
          sex: 'female',
          age: 2
        },
        {
          name: 'Nicholas',
          sex: 'male',
          age: 2
        },
      ]
    },
    {
      id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      name: 'otters',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Neville',
          sex: 'male',
          age: 9
        },
        {
          name: 'Lloyd',
          sex: 'male',
          age: 8
        },
        {
          name: 'Mercedes',
          sex: 'female',
          age: 9
        },
        {
          name: 'Margherita',
          sex: 'female',
          age: 10
        },
      ]
    },
    {
      id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      residents: [
        {
          name: 'Cathey',
          sex: 'female',
          age: 3
        },
        {
          name: 'Annice',
          sex: 'female',
          age: 2
        }
      ]
    },
    {
      id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      residents: [
        {
          name: 'Paulette',
          sex: 'female',
          age: 5
        },
        {
          name: 'Bill',
          sex: 'male',
          age: 6
        }
      ]
    },
    {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Gracia',
          sex: 'female',
          age: 11
        },
        {
          name: 'Antone',
          sex: 'male',
          age: 9
        },
        {
          name: 'Vicky',
          sex: 'female',
          age: 12
        },
        {
          name: 'Clay',
          sex: 'male',
          age: 4
        },
        {
          name: 'Arron',
          sex: 'male',
          age: 7
        },
        {
          name: 'Bernard',
          sex: 'male',
          age: 6
        }
      ]
    }
  ];

//pequenas funções
const getlocation = location => location.location;
const region = animals.map(getlocation).filter((region, index, array) => {
    return index === array.indexOf(region)
});

// 9.1 Sem parâmetros, retorna animais categorizados por localização
function animalMap(options) {
    let result = {}
    if (!options) {
        region.forEach((location) => {
            const speciesZoo = animals.filter((animal) => {
                return animal.location === location
            })
            .map(animal => animal.name);
            // console.log(speciesZoo);
            result[location] = speciesZoo;
        })
    }
    return result;
}
// console.log(animalMap())

// 9.2 Com a opção includeNames: true especificada, retorna nomes de animais
const options = {includeNames: true, sorted: true};
function animalMap1(options) {
    let result = {}
    if (!options) {
        region.forEach((location) => {
            const speciesZoo = animals.filter((animal) => {
                return animal.location === location
            })
            .map(animal => animal.name);
            // console.log(speciesZoo);
            result[location] = speciesZoo;
        })
    } else {
        const { includeNames } = options
        if (includeNames === true) {
            region.forEach((location) => {
                const speciesZoo = animals.filter((animal) => {
                    return animal.location === location
                })
                .map(animal => animal.name);
                // console.log(speciesZoo);
                result[location] = speciesZoo;
            })
        }
    }
    return result;
}
// console.log(animalMap1(options))
//percebi, que posso usar a mesma função para !option ou !includenames

function nameSpeciesForRegion(){
    let result = {}
    region.forEach((location) => {
        const speciesZoo = animals.filter((animal) => {
            return animal.location === location
        })
        .map(animal => animal.name);
        // console.log(speciesZoo);
        result[location] = speciesZoo;
    })
    return result;
}

function nameSpeciesOrdem(region, sorted, sex) {
    const result = {};
    region.forEach((location) => {
        const animalsFull = animals
        .filter(animal => animal.location === location)
        .map((animal) => {
            const nameKey = animal.name;
            const nameValues = animal.residents
            .filter((resident) => {
                const isFilteringSex = sex !== undefined;
                return isFilteringSex ? resident.sex : true;
            })
            .map(resident => resident.name);
            if (sorted) nameValues.sort();
            // console.log(nameValues.join()); //retorna string completa com nomes dos animais por especie.
            return { [nameKey]: nameValues }
        });
        result[location] = animalsFull;
    });
    return result;
}

function animalMap2(options) {
    if (!options) return nameSpeciesForRegion()
    //variável options está declarada no escopo global.
    // const { includeNames } = options etapa 9.2
    const {includeNames, sorted, sex} = options;
    // console.log(includeNames, sorted);
    if (!includeNames) return nameSpeciesForRegion()
    return nameSpeciesOrdem(region, sorted, sex)
}
console.log(animalMap2(options)); //neste option = {includeNames: true, sorted: true}

// 9.3 em diante Com a opção sorted: true especificada, retorna nomes de animais ordenados
//sorted: true com ordenação
//sex: param default true

