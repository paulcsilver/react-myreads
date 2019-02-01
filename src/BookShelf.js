import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Book Shelf</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
}

export default BookShelf