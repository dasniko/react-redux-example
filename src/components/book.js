import React from "react";

export default class Book extends React.Component {
  render() {
    const {book} = this.props;
    return (
      <div className="book">
        <span className="lead">{book.title}</span>
        <h3>{book.author}</h3>
        <button className="btn btn-xs btn-danger pull-right" onClick={()=>this.props.onBookDelete(book)}>Delete Book</button>
        <hr/>
      </div>
    );
  }
}
