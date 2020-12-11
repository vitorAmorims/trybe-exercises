const INITIAL_STATE = "";

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ELEMENT":
      return [...state, action.nome, action.email];
    default:
      return state;
  }
}

export default reducer;
