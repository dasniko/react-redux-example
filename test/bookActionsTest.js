import expect from "expect";
import * as actions from "../src/actions/books";
import * as types from "../src/actions/types";

describe('Book Actions', () => {

  it('should return an ADD_BOOK action', () => {
    expect(
      actions.addBook({})
    ).toEqual({type: types.ADD_BOOK, payload: {}})
  });

  it('should return an DELETE_BOOK action', () => {
    expect(
      actions.deleteBook({})
    ).toEqual({type: types.DELETE_BOOK, payload: {}})
  });

});
