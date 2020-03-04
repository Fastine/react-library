import React, { Component } from "react";
import PropTypes from "prop-types";

export class Book extends Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.book.read ? "lightgreen" : "FireBrick",
      width: "300px",
      margin: "10px",
      cursor: "pointer",
      border: "1px black dotted"
    };
  };

  render() {
    const { id, title } = this.props.book;
    return (
      <div style={this.getStyle()} onClick={this.props.markRead.bind(this, id)}>
        <p>
          {title}{" "}
          <button onClick={this.props.delBook.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
        <p>Author: {this.props.book.author}</p>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "4px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  zIndex: "99",
  position: "relative"
};

export default Book;
