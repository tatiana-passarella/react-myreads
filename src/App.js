import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from "./BooksList";
//import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }


  changeShelf = (theBook, shelf) => {
    BooksAPI.update(theBook, shelf).then(() => {
      this.setState(prevState => {
        let newBook = true;
        prevState.books.forEach(book => {
          if(theBook.id === book.id)
            newBook = false; /* theBook already exist */
        })
        if(newBook)
          prevState.books.splice(1, 0, theBook);
        return ({
          books: prevState.books.map(book => {
            if(book.id === theBook.id)
              book.shelf = shelf;
            return book;
          })
          .filter(bok => bok.shelf !== "none")
        })
      })
    })
  }

  render() {
    //const { books } = this.state;

    return (
	<div className="app">
		<Route exact path="/" 
			render={() =>
      			<BooksList books={this.state.books} changeShelf={this.changeShelf} />
  			}
    	/>
		<Route path="/search"
            //<SearchBook booksOnShelf={books} changeShelf={this.changeShelf} />
        />
      </div>
    )
  }
}

export default BooksApp