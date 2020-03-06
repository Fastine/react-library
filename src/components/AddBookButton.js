import React, { Component } from "react";
import "../styles/App.css";

export class AddBookButton extends Component {
  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={e => {
            this.props.openModal();
          }}
        >
          Add Book
        </button>
      </div>
    );
  }
}

export default AddBookButton;
