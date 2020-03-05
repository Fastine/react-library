import React, { Component } from "react";
import "../styles/AddBookModal.css";

export default class AddBookModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      pages: 1,
      read: false
    };
  }

  clearState = () => {
    this.setState({ title: "", author: "", pages: 1, read: false });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addBook(
      Math.random() * 1000,
      this.state.title,
      this.state.author,
      this.state.pages,
      this.state.read
    );
    this.clearState();
    this.props.closeModal();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (!this.props.modalOpen) {
      return null;
    }
    return (
      <div className="modal">
        <span
          className="modalClose"
          onClick={e => {
            this.props.closeModal();
          }}
        >
          &times;
        </span>
        <form className="form-container">
          <p style={{ fontSize: "2rem" }}>Add New Book</p>
          <input
            type="text"
            name="title"
            placeholder="Enter title..."
            value={this.state.title}
            onChange={this.onChange}
          ></input>
          <input
            type="text"
            name="author"
            placeholder="Enter author's name..."
            value={this.state.author}
            onChange={this.onChange}
          ></input>
          <input
            type="number"
            name="pages"
            value={this.state.pages}
            onChange={this.onChange}
            min="1"
          ></input>

          <label htmlFor="read">Read?</label>
          <input type="checkbox" name="read" value={this.state.read} />

          <button type="submit" name="addBook" onClick={this.onSubmit}>
            Add Book
          </button>
        </form>
      </div>
    );
  }
}
