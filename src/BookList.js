import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends React.Component {
  static shelves = [
    { id: 'currentlyReading', title: 'Currently Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'read' },
  ]

  render() {
    console.log('Book Shelves', BookList.shelves);

    return (
      <div className="list-books-content">
        {
          BookList.shelves.map((shelf) => (
            <BookShelf
              key={shelf.id}
              title={shelf.title}
              books={this.props.bookList.filter( book => book.shelf === shelf.id )}
              moveBook = {this.props.moveBook}
            />
          ))
        }
      </div>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default BookList