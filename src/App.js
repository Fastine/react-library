import React from "react";
import "./styles/App.css";
import Header from "./components/layout/Header";
import BookList from "./components/BookList";
import AddBookModal from "./components/AddBookModal";
import AddBookButton from "./components/AddBookButton";

class App extends React.Component {
  state = {
    modalOpen: false,
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
        title: "JavaScript : The Good Parts",
        author: "Douglas Crockford",
        pages: 153,
        read: false
      },
      {
        id: 4,
        title: "JavaScript : The Definitive ",
        author: "David Flanagan",
        pages: 1096,
        read: false
      },
      {
        id: 5,
        title: "JavaScript and JQuery : Interactive Front-End Web Development",
        author: "Jon Duckett",
        pages: 640,
        read: false
      },
      {
        id: 6,
        title: "HTML & CSS : Design and Build Websites",
        author: "Jon Duckett",
        pages: 490,
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

  addBook = (id, title, author, pages, read) => {
    let newBook = {
      id,
      title,
      author,
      pages,
      read
    };
    this.setState({ books: [...this.state.books, newBook] });
  };

  openModal = e => {
    this.setState({
      modalOpen: true
    });
  };

  closeModal = e => {
    this.setState({
      modalOpen: false
    });
  };

  getStyle = () => {
    return {
      display: "flex",
      flexDirection: "row",
      margin: "0 auto"
    };
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddBookButton openModal={this.openModal} />
        <AddBookModal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal}
          addBook={this.addBook}
        />
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
