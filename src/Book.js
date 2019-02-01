import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
  // let book = this.props.book;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{width: 128, height: 192, }} />
        <div className="book-shelf-changer">
          <select>
            <option value="moveTo" disabled>Move to...</option>
          </select>
        </div>
      </div>
      <div className="book-title">Book Title</div>
      <div className="book-authors">Book Authors</div>
    </div>
  );
}

// Book.propTypes = {
//   book: PropTypes.object.isRequired,
//   changeShelf: PropTypes.func.isRequired,
// };

export default Book
