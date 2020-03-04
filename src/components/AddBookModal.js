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

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="modal">
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
          <label for="read">Read?</label>
          <input type="checkbox" name="read" value={this.state.read} />
        </form>
      </div>
    );
  }
}
