import * as types from "../actions/types";

const initialBooks = [
  {id: 1, author: 'George Orwell', title: '1984'},
  {id: 2, author: 'Douglas Adams', title: 'Hitchhiker\'s Guide to the Galaxy'}
];

const booksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      const lastId = state.length ? state[state.length-1].id + 1 : 1;
      const newBook = {...action.payload, ...{id: lastId}};
      const newState = [...state];
      newState.push(newBook);
      return newState;
      break;

    case types.DELETE_BOOK:
      const id2Remove = action.payload.id;
      return state.filter(e => e.id !== id2Remove);
      break;

    default:
      return state;
  }
};

export default booksReducer;
