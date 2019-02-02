import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.length > 0 ? (
              this.props.books.map((book) => (
                <li key={book.id}>
                  <Book book={book} moveBook={this.props.moveBook} />
                </li>
              ))) : (
                <div><h3>There are no books on this shelf.</h3></div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default BookShelf