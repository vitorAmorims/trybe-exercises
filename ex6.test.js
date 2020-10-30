const { Animals,
    findAnimalsByType,
    getListAnimals,
    findAnimalByName,
    getAnimal } = require('./ex6');

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
        test('Se a função retorna o objeto do animal', async (done) => {
            try {
                const response = await getAnimal('Dorminhoco');
                expect(response).then((value) => value).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
            } catch (error) {

            }
        done();
        });
    });
    describe('Quando não existe o animal com o nome procurado', () => {
        test('Retorne a mensagem de erro', () => {
            return expect(getAnimal('Dorminhoc')).rejects.toEqual('Nenhum animal com este nome.');                    
        });
    });


});

