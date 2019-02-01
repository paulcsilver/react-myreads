import React from 'react'
import { Link } from 'react-router-dom'
import * as BookAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            <li><Book /></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks