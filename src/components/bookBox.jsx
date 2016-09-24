import React from "react";
import {connect} from "react-redux";
import BookForm from "./bookForm";
import BookList from "./bookList";
import {addBook} from "../actions/books";

class BookBox extends React.Component {
  render() {
    return (
      <div className="bookBox row">
        <h2>Best Books ever!</h2>
        <BookList books={this.props.books}/>
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookBox)
