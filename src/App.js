import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from "./BooksList";
import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({
        books: myBooks
      });
    });
  }


 changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getShelf();
    });
  };

  getShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }


    render() {
    return (
      <div className="app">
        <Route exact path='/'
			render={() => (
				<BooksList booksOnShelf={this.state.books} />
			)}
        />
        <Route
          path="/search"
			render={() => (
				<SearchBook onChangeShelf={this.changeShelf} booksOnShelf={this.state.books} />
			)}
        />
      </div>
    );
  }
}

export default BooksApp;