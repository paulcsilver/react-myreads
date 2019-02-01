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
  * @description Requests all books for the user
  */
  requestBooks() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books); //TODO: remove
        this.setState(() => ({ books }));
      });
  }


  moveBookToShelf(book, shelf) {
    console.log(`Moving book: ${book} to shelf: ${shelf}`);
  }

  componentDidMount() {
    this.requestBooks();
  }

  render() {
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
          <SearchBooks />
        )} />

      </div>
    )
  }
}

export default App
