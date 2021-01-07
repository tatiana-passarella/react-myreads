# My Reads

My Reads is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. 

The project using React to build the application and an API server to record your books or search new ones

## Installation

Follow this steps to install and play with this app on your local computer.
- Download or clone this repository
- run `npm install` inside the root directory
- run `npm start` or `yarn start`
- The app will run *locally* on `*port: 3000*` and the browser will open on this, if not follow the last istruction
- Open `http://localhost:3000` in a your browser

## Template provided by:

Forked from [Udacity's myreads starter template repository](https://github.com/udacity/reactnd-project-myreads-starter)

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # HTML template
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the app root that render the main components.
    ├── BooksList.js # Component that render the three shelfs.
    ├── TheShelf.js # Component that render the books inside a shelf mapping over the books already recorded.
    ├── TheBook.js # Component that render a single book.
    ├── SearchBook.js # Component that perform the search through the provided API and render result.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Icons used in the app.
    │   ├── book.svg
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
