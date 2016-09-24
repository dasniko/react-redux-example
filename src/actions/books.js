import * as types from "./types";

export function addBook(book) {
  return {
    type: types.ADD_BOOK,
    payload: book
  }
}

export function deleteBook(book) {
  return {
    type: types.DELETE_BOOK,
    payload: book
  }
}
