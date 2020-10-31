let { fetchDogs } = require('./ex7');
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('Testando API', () => {
    fetchDogs = jest.fn();
    afterEach(() => {
        fetchDogs.mockReset();
    })
    test('Testando API caso a promise resolva.', () => {
        fetchDogs.mockResolvedValue('request success');
        expect(fetchDogs()).resolves.toBe('request success');
    });
    test("Testando API caso a promise não resolva.", () => {
        fetchDogs.mockResolvedValue('request success');
        expect(fetchDogs()).rejects.toBe('error');
    });
})
