import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  state = {
    searchResults: []
  }

  /*
   * @description Searches the book API by title or author
   * @param {String} query - the search string to use in the API
   */
  searchBooks = (query) => {
    // Trim whitespace and only search of there is a string
    // Otherwise clear the search results
    query = query.trim();
    if (query !== '') {
      BooksAPI.search(query)
        .then((results) => {
          console.log(results);
          this.setState(() => ({ searchResults: results }));
        }).catch((error) => {
          console.log('Error searching books: ', error);
          this.setState({ searchResults: [] });
        });
    } else {
      this.setState({ searchResults: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)} />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.length > 0 && this.state.searchResults.map((book) => (
              <li key={book.id}><Book book={book} moveBook={this.props.moveBook} /></li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default SearchBooks