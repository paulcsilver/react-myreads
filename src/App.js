import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'

class App extends React.Component {
  state = {
    books: [],
  }

  requestBooks() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books);
        this.setState(() => ({ books }));
      });
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

            <BookList bookList={this.state.books} />

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
