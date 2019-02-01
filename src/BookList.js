import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends React.Component {
  static shelves = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'read',
  }

  render() {
    console.log('Book Shelves', BookList.shelves);

    return (
      <div className="list-books-content">
        <BookShelf />
        <BookShelf />
        <BookShelf />
      </div>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.array.isRequired,
}

export default BookList