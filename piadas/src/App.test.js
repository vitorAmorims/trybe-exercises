// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from './App';

describe('test para mock API', () => {
  it('fetch joke', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    const response = { json: jest.fn().mockResolvedValue(joke)}
    global.fetch = jest.fn().mockResolvedValue(response);
  
    
    // jest.spyOn(global, "fetch")
    // global.fetch.mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(joke),
    // });
  
  
    const { findByText } = render(<App />);
    await findByText('Whiteboards ... are remarkable.');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://icanhazdadjoke.com/',
      {"headers": {"Accept": "application/json"}}
    );
  });
})

describe('Teste para campos de nome e email', () => {
  test('Verifique se existe Input para "Nome" na tela:', () => {
    const { getByTestId } = render(<App />);
    const inputNome = getByTestId('input-nome');
    expect(inputNome).toBeInTheDocument();
  })
  
  test('Verifique se existe Input para "Email" na tela:', () => {
    const { getByTestId } = render(<App />);
    const inputEmail = getByTestId('input-email');
    expect(inputEmail).toBeInTheDocument();
  })
  
  test('Alterando o valor dos campos e testando o valor guardado', () => {
    const { getByTestId } = render(<App />);
  
    const inputNome = getByTestId('input-nome')
    expect(inputNome).toHaveValue('')
  
    const inputEmail = getByTestId('input-email');
    expect(inputEmail).toHaveValue('')
  
    fireEvent.change(inputNome, { target: { value: "Vitor"}});
    expect(inputNome).toHaveValue('Vitor')
  
    fireEvent.change(inputEmail, { target: { value: "vitor@teste.com"}});
    expect(inputEmail).toHaveValue('vitor@teste.com')
  })
})
