import React from 'react';
import PropTypes from 'prop-types'
import BookList from './BookList'

const Book = (props) => {
  const book = props.book;
  const bookShelf = book.shelf ? book.shelf : 'none';

  // Some books do nat have the imageLinks property
  let bookCover = "";
  if (book.imageLinks) {
    bookCover = book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : "";
  }

  // Some books do not have an author
  const authors = book.authors ? book.authors : ["Unknown Author"];

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${bookCover}")` }} />
        <div className="book-shelf-changer">
          <select onChange={(event) => props.moveBook(book, event.target.value)} defaultValue={bookShelf}>
            <option key="moveTo" value="moveTo" disabled>Move to...</option>
            {BookList.shelves.map((shelf) => (
              <option key={shelf.id} name={shelf.id} value={shelf.id}>{shelf.title}</option>
            ))}
            <option key="none" name="none" value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{authors.join(', ')}</div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired,
};

export default Book
