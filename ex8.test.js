let { fetchJoke } = require('./ex8');
const fetch = require('node-fetch');
const { expect } = require('@jest/globals');
jest.mock('node-fetch');

const fetchJokeFake = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
}

describe('testando requisição da API', () => {
    test('teste positivo', async (done) => {
        fetchJoke = jest.fn();
        fetchJoke.mockResolvedValue(fetchJokeFake);
        const response = await fetchJoke();
        expect(response.joke).toEqual(fetchJokeFake.joke);
        done();
    })
})