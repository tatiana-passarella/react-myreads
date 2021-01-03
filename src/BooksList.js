import React from 'react';
import { Link } from 'react-router-dom'
import theShelf from './theShelf'


class BooksList extends React.Component {
  render() {
    const { books, changeShelf } = this.props


    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
			<div>
              <theShelf key="currentlyReading" 
              title="Currently Reading" 
              changeShelf={changeShelf}  
              theBooks={books.filter(b => b.shelf === 'currentlyReading')}/>

              <theShelf key="wantToRead" 
              title="Want To Read" 
			  changeShelf={changeShelf} 
			  theBooks={books.filter(b => b.shelf === 'wantToRead')}/>

              <theShelf key="read" 
              title="Read"
			  changeShelf={changeShelf} 
              theBooks={books.filter(b => b.shelf === 'read')}/>
            </div>
          </div>
		  <div className="open-search">
			<Link to="/search" className="add-contact">Add a book</Link>
		  </div>
      </div>
    );
  }
}
export default BooksList;