import {ADD_BOOK, DELETE_BOOK} from "../actions/books";

const initialBooks = [
  {id: '1', author: 'George Orwell', title: '1984'},
  {id: '2', author: 'Douglas Adams', title: 'Hitchhiker\'s Guide to the Galaxy'}
];

const booksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const newState = [...state];
      newState.push(action.payload);
      return newState;
      break;

    case DELETE_BOOK:

      break;

    default:
      return state;
  }
};

export default booksReducer;
