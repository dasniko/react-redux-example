import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import createLogger from "redux-logger";
import bookState from "./reducers";
import BookBox from "./components/bookBox";

let store = createStore(bookState, applyMiddleware(createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <BookBox/>
  </Provider>,
  document.getElementById("app")
);
