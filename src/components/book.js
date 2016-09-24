import React from "react";

export default class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <h4>{this.props.author}</h4>
        <div className="lead">{this.props.title}</div>
        <hr/>
      </div>
    );
  }
}
