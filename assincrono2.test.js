const {
    getListAnimals,
    findAnimalsByType,
    Animals
}  = require("./assincrono2");

// console.log(Animals);
// console.log(typeof findAnimalsByType);

describe("Quando o tipo do animal existe", () => {
  test("Retorne a lista de animais por espécie", () => {
    // expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual("Dorminhoco");
      expect(listDogs[1].name).toEqual("Soneca");
    });
  });
});

