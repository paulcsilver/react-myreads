import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
//import BookList from './BookList'

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
          let resultsWithShelves = [];
          results.forEach((book) => {
            book.shelf = this.shelfForSearchResult(book);
            resultsWithShelves.push(book);
          });
          this.setState(() => ({ searchResults: resultsWithShelves }));
        }).catch((error) => {
          console.log('Error searching books: ', error);
          this.setState({ searchResults: [] });
        });
    } else {
      this.setState({ searchResults: [] });
    }
  }

  /*
   * @description Determines the shelf of the given book if the book is on one of the user's shelves
   * @param {Object} book - the book from the search BooksAPI
   * @returns {String} the shelf ID or 'none'
   */
  shelfForSearchResult = (book) => {
    let shelf = "none";
    let bookOnShelf = this.props.bookMap.get(book.id);
    if (bookOnShelf) {
      shelf = bookOnShelf.shelf;
    }

    return shelf;
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
  bookMap: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default SearchBooks