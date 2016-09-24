import expect from "expect";
import booksReducer from "../src/reducers/books";
import * as types from "../src/actions/types";

describe('Book Reducer', () => {

  it('should return the initial list with size of 2', () => {
    expect(
      booksReducer(undefined, {}).length
    ).toBe(2)
  });

  it('should extend the list of 2 books with a new book, resulting in a list of 3', () => {
    expect(
      booksReducer([{id: 1},{id: 2}], {type: types.ADD_BOOK, payload: {}}).length
    ).toBe(3)
  });

  it('should extend the list of books with a new book, and the new id should be 3', () => {
    expect(
      booksReducer([{id: 1},{id: 2}], {type: types.ADD_BOOK, payload: {}}).pop()
    ).toEqual({id: 3})
  });

  it('should reduce the list of 2 books with one book, resulting in a list of 1', () => {
    expect(
      booksReducer([{id: 1},{id: 2}], {type: types.DELETE_BOOK, payload: {id: 2}}).length
    ).toBe(1)
  });

  it('should reduce the list of 2 books with one book, last item should have id 1', () => {
    expect(
      booksReducer([{id: 1},{id: 2}], {type: types.DELETE_BOOK, payload: {id: 2}}).pop()
    ).toEqual({id: 1})
  });

});
