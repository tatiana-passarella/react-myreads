import React from "react";

class theBook extends React.Component {
render() {
	const { book , changeShelf } = this.props

    const coverImgURL = book.imageLinks
      ? book.imageLinks.smallThumbnail
      : "http://via.placeholder.com/128x190";

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={coverImgURL}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={book.shelf} onChange={changeShelf}>
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