import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from "./BooksList";
import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }


changeShelf = (theBook, evt) => {
    theBook.shelf = evt.target.value;
    const theState = this.state.books;
    const newState = this.state.books.filter(function(elem) {
      return elem.id !== theBook.id;
    });
    newState.push(theBook);
    this.setState({ books: newState });

    BooksAPI.update(theBook, evt.target.value)
      .then(bookData => {})
      .catch(err => {
        this.setState({ books: theState });
      });
  };

  render() {

    return (
	<div className="app">
		<Route exact path="/" 
			render={() =>
      			<BooksList books={this.state.books} changeShelf={this.changeShelf} />
  			}
    	/>
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBook book={this.state.books} changeShelf={this.changeShelf} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp