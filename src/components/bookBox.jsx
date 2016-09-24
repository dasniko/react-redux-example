import React from "react";
import {connect} from "react-redux";
import BookForm from "./bookForm";
import BookList from "./bookList";

class BookBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
  }

  handleBookSubmit(book) {
    // TODO implement me
    console.debug(book);
  }

  render() {
    return (
      <div className="bookBox row">
        <h2>Best Books ever!</h2>
        <BookList books={this.props.books}/>
        <BookForm onBookSubmit={this.handleBookSubmit}/>
      </div>
    );
  }
}

BookBox.defaultProps = {
  books: [
    {id: '1', author: 'George Orwell', title: '1984'},
    {id: '2', author: 'Douglas Adams', title: 'Hitchhiker\'s Guide to the Galaxy'}
  ]
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
