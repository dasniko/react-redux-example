import {combineReducers} from "redux";
import books from "./books";

const bookState = combineReducers({
  books
});

export default bookState;
