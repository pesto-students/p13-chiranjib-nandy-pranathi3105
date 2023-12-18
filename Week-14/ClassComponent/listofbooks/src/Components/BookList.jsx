import React, { Component } from 'react'
import WithLogging from './WithLogging';
import Book from './Book';
export class BookList extends Component {
  render() {
    const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 }
];

      const bookcomponents = books.map(singlebook=>(
        <Book key={singlebook.title} book={singlebook} />
      ));
    return (
      <div>
        <h1>Book List</h1>
        {bookcomponents}
      </div>
    );
  }
}

export default WithLogging(BookList)