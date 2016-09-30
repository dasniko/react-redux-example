import React from "react";
import {connect} from "react-redux";
import BookForm from "./bookForm";
import BookList from "./bookList";
import {addBook, deleteBook} from "../actions/books";

class BookBox extends React.Component {
  render() {
    return (
      <div className="bookBox row">
        <h1>Best Books ever!</h1>
        <hr/>
        <BookList books={this.props.books} onBookDelete={this.props.handleBookDelete}/>
        <BookForm onBookSubmit={this.props.handleBookSubmit}/>
      </div>
    );
  }
}

BookBox.defaultProps = {
  books: []
};

const mapStateToProps = state => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleBookSubmit: (book) => {
      dispatch(addBook(book));
    },
    handleBookDelete: (book) => {
      dispatch(deleteBook(book));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookBox)
