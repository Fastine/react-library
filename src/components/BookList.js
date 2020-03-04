import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import "../BookList.css";

export default class BookList extends Component {
  render() {
    return this.props.books.map(book => (
      <Book
        key={book.id}
        book={book}
        markRead={this.props.markRead}
        delBook={this.props.delBook}
      />
    ));
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};
