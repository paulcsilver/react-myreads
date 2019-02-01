import React from 'react';
import PropTypes from 'prop-types'
import BookList from './BookList'

const Book = props => {
  const book = props.book;
  const bookCover = book.imageLinks.smallThumbnail;
  const bookShelf = book.shelf ? book.shelf : 'none'
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{width: 128, height: 192, backgroundImage: `url("${bookCover}")` }} />
        <div className="book-shelf-changer">
          <select defaultValue={bookShelf}>
            <option key="moveTo" value="moveTo" disabled>Move to...</option>
            {BookList.shelves.map((shelf) => (
              <option key={shelf.id} name={shelf.id} value={shelf.id}>{shelf.title}</option>
            ))}
            <option key="none" name="none" value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(', ')}</div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired,
};

export default Book
