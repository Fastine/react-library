import React, { Component } from "react";

export class AddBookButton extends Component {
  render() {
    return (
      <div>
        <button
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
