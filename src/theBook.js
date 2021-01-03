import React from "react";

class theBook extends React.Component {
render() {
const { book , changeShelf } = this.props

    const coverImgURL = book.imageLinks
      ? book.imageLinks.smallThumbnail
      : "http://via.placeholder.com/128x190";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img
              className="book-cover"
              src={coverImgURL}
              alt="Book Cover img"
            />
            <div className="book-shelf-changer">
              <select
                value={book.shelf}
                onChange={changeShelf}
              >
                <option value="none" disabled="disabled">
                  Move to...
                </option>
                <option value="currentlyReading">
                  Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors ? book.authors.join(', ') : book.publisher}
          </div>
        </div>
      </li> 
 )
}
}


export default theBook;