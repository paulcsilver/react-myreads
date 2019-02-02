import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';

class App extends React.Component {
  state = {
    books: [],
  }

  /**
   * @description Requests all books from the API
   */
  requestBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }));
      }).catch((error) => {
        console.log('Error requesting books: ', error);
      });
  }

  /**
   * @description Moves a book to a shelf
   * @param {Object} book - a book
   * @param {String} shelf - the shelf to move the book to
   */
  moveBookToShelf = (book, shelf) => {
    console.log(`Moving book: ${book.id} to shelf: ${shelf}`);
    BooksAPI.update(book, shelf)
    .then(() => {
      this.requestBooks();
    }).catch((error) => {
      console.log('Error updating book: ', error);
    });
  }

  componentDidMount() {
    this.requestBooks();
  }

  render() {
    let bookMap = new Map();
    this.state.books.map((book) => (
      bookMap.set(book.id, book)
    ));
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <BookList bookList={this.state.books} moveBook={this.moveBookToShelf} />

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />

        <Route path="/search" render={() => (
          <SearchBooks bookMap={bookMap} moveBook={this.moveBookToShelf} />
        )} />
      </div>
    )
  }
}

export default App
