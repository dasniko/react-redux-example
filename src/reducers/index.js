import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import books from "./books";

const bookState = combineReducers({
  routing: routerReducer,
  books
});

export default bookState;
