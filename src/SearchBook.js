import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import TheBook from './TheBook';


class SearchBook extends React.Component {
  state = {
    query: '',
    booksFound: [],
    err: false
  };

  searchBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ booksFound: books, err: false })
          : this.setState({ booksFound: [], err: true });
      });
    } else this.setState({ booksFound: [], err: false });
  };

  render() {
    const { query, booksFound, err } = this.state;
    const { changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search book title or author"
              value={query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {booksFound.length > 0 && (
            <div>
              <h3>We found {booksFound.length} books </h3>
              <ol className="books-grid">
                { booksFound.map((book) => {
                        return (
                            <TheBook key={book.id} book={book} changeShelf={changeShelf} />
                        )
                      })
                    }
              </ol>
            </div>
          )}
          {err && (
            <h3>Please try again, your search return nothing</h3>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBook;