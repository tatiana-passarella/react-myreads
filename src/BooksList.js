import React from 'react';
import { Link } from 'react-router-dom'
import theShelf from './theShelf'


class BooksList extends React.Component {
  render() {
    const { books, changeShelf } = this.props

 render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
              <theShelf name="Currently Reading" 
      			shelfBooks={books.filter(book => book.shelf === 'currentlyReading')} 
    			changeShelf={changeShelf} />
              <theShelf name="Want to Read" 
    			shelfBooks={books.filter(book => book.shelf === 'wantToRead')} 
  				changeShelf={changeShelf} />
              <theShelf name="Read" 
				shelfBooks={books.filter(book => book.shelf === 'read')} 
				changeShelf={changeShelf} />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default BooksList;