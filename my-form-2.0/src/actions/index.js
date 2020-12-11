export const ADD_ELEMENT = 'ADD_ELEMENT';

export const add = (nome, email, cpf) => ({
    type: ADD_ELEMENT,
    nome,
    email,
    cpf
});