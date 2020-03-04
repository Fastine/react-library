import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import BookList from "./components/BookList";

class App extends React.Component {
  state = {
    books: [
      {
        id: 1,
        title: "Ender's Game",
        author: "Orson Scott Card",
        pages: 400,
        read: true
      },
      {
        id: 2,
        title: "Eloquent JavaScript 3rd Edition",
        author: "Marijn Haverbeke",
        pages: 224,
        read: false
      },
      {
        id: 3,
        title: "JavaScript/: The Good Parts",
        author: "Douglas Crockford",
        pages: 153,
        read: false
      }
    ]
  };

  markRead = id => {
    this.setState({
      books: this.state.books.map(book => {
        if (book.id === id) {
          book.read = !book.read;
        }
        return book;
      })
    });
  };

  delBook = id => {
    console.log(id);
    this.setState({
      books: [...this.state.books.filter(book => book.id !== id)]
    });
  };

  getStyle = () => {
    return {
      display: "flex",
      flexDirection: "row"
    };
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <React.Fragment>
            <BookList
              style={this.getStyle()}
              books={this.state.books}
              markRead={this.markRead}
              delBook={this.delBook}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
export default App;
