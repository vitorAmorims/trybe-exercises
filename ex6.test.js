let { fetchWeatherForCity } = require('./ex6');
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('Testando API pela aula de hoje!', () => {
    test('Testando API caso a promise resolva.', async (done) => {
        const mockedJson = {
            weatherCondition: "sun"
        }
        fetch.mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve(mockedJson)
        }));
        const response = await fetchWeatherForCity('Fortaleza');
        expect(response).toBe('🌞');
        done();        
    });
    test('Testando API caso a promise resolva', () => {
        fetchWeatherForCity = jest.fn();
        fetchWeatherForCity.mockResolvedValue('⛅️');
        expect(fetchWeatherForCity('São Paulo')).resolves.toBe('⛅️');
    });
    test("Testando API caso a promise não resolva.", async (done) => {
        // expect(fetchWeatherForCity()).rejects.toBe('Weather condition not found');
        try {
            await fetchWeatherForCity('São Paulo');
        } catch (error) {
            expect(error).toBe('Weather condition not found');
        }
        done();
    },10);
})