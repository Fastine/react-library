import React, { Component } from "react";
import PropTypes from "prop-types";

export class Book extends Component {
  constructor(props) {
    super(props);
    this.props.delBook.bind(this);
  }

  getStyle = () => {
    return {
      backgroundColor: this.props.book.read ? "lightgreen" : "LightCoral",
      width: "300px",
      margin: "10px",
      cursor: "pointer",
      border: "1px black dotted",
      color: "black"
    };
  };

  render() {
    const { id, title } = this.props.book;
    return (
      <div style={this.getStyle()} onClick={this.props.markRead.bind(this, id)}>
        <p style={{ fontWeight: "bold" }}>
          {title}
          <button
            className="noselect"
            onClick={e => {
              e.stopPropagation();
              this.props.delBook(id);
            }}
            style={btnStyle}
          >
            x
          </button>
        </p>
        <p>By: {this.props.book.author}</p>
        <p>{this.props.book.pages} pages</p>
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
  float: "right"
};

export default Book;
