export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  }
}

export function deleteBook(book) {
  return {
    type: DELETE_BOOK,
    payload: book
  }
}
