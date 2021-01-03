import React from 'react';
import theBook from './theBook'

class theShelf extends React.Component {
render() {
 const { title, theBooks, changeShelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    { theBooks.map((book) => {
                        return (
                            <theBook key={book.id} book={book} changeShelf={changeShelf} />
                        )
                      })
                    }
                    </ol>
                </div>
            </div>
        )
    }

}

export default theShelf