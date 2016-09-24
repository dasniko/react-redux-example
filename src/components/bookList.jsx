import React from "react";
import Book from "./book";

export default class BookList extends React.Component {
  render() {
    let books = this.props.books.map(function (book, index) {
      return (
        <Book author={book.author} title={book.title} key={index}/>
      );
    });

    return (
      <div className="bookList col-sm-6">
        {books}
      </div>
    );
  }
}
