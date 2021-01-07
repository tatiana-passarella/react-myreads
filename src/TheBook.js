import React from "react";

class theBook extends React.Component {
render() {
	const { book, myBooks, changeShelf } = this.props

    const coverImgURL = book.imageLinks
      ? book.imageLinks.smallThumbnail
      : "http://via.placeholder.com/128x190";

    let currentShelf = 'none';
    for (let item of myBooks) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div
                            className='book-cover'
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${coverImgURL})`,
                            }}
                        />
                        <div className="book-shelf-changer">
                            <select defaultValue={currentShelf} onChange={evt => changeShelf(book, evt)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}


export default theBook;