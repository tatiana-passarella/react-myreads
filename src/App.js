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


 changeShelf = (thisBook, shelf) => {
    BooksAPI.update(thisBook, shelf).then(() => {
      this.setState(prev => {
        let newBook = true;
        prev.books.forEach(book => {
          if(thisBook.id === book.id)
            newBook = false; /* the book already exist */
        })
        if(newBook)
          prev.books.splice(1, 0, thisBook);
        return ({
          books: prev.books.map(book => {
            if(book.id === thisBook.id)
              book.shelf = shelf;
            return book;
          })
          .filter(b => b.shelf !== "none")
        })
      })

  render() {
    const { books } = this.state;

    return (
	<div className="app">
		<Route exact path="/" 
			render = {() =>
      			<BooksList booksOnShelf={this.state.books} changeShelf={this.changeShelf} />
  			}
    	/>
		<Route path="/search" 
			render = {() =>
				<SearchBook booksOnShelf={this.state.books} changeShelf={this.changeShelf} />
			}
		/>
      </div>
    )
  }
}

export default BooksApp