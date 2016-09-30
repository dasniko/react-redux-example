import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import createLogger from "redux-logger";
import {Router, Route, browserHistory} from "react-router";
import bookState from "./reducers";
import BookApp from "./components/bookApp";
import BookBox from "./components/bookBox";
import BookDetails from "./components/bookDetails";

let store = createStore(bookState, applyMiddleware(createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={BookApp}>
        <Route path="/" component={BookBox}/>
        <Route path="books/:bookId" component={BookDetails}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
