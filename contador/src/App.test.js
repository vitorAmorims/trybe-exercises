import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderWithRedux from './test/helpers/index'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Página inicial do app.', () => {
  afterEach(() => {
    cleanup()
  })
  const renderAppWithRouter = ( initialEntries = ['/']) => (
    <Router history={createMemoryHistory({initialEntries})}>
      <App />
    </Router>
  );
  test('Existe botão Clique aqui', () => {
    const { getByText } = renderWithRedux(<App />);
    const btn = getByText('Clique aqui');
    expect(btn).toBeInTheDocument()
  });
  test('Renderiza a página inicial com valor 0', () => {
    const { getByText } = renderWithRedux(
      renderAppWithRouter(),
      { initialState : { counter: 0 }}
    );
    const counter = getByText('0');
    expect(counter).toBeInTheDocument();
  });
  test('Renderiza o número 1 após clicar no btn Clique Aqui', () => {
    const { getByText } = renderWithRedux(
      renderAppWithRouter(),
      { initialState : { counter: 0 }}
    );
    fireEvent.click(getByText(/Clique/));
    const counter = getByText('1');
    expect(counter).toBeInTheDocument();
  });
  test('Renderiza o número 2', () => {
    const { getByText } = renderWithRedux(
      renderAppWithRouter(),
      { initialState : { counter: 0 }}
    );
    fireEvent.click(getByText(/Clique/));
    const counter = getByText('2');
    expect(counter).toBeInTheDocument();
  })

})