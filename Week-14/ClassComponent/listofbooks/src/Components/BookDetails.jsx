import React from 'react'

const BookDetail = ({ book }) => {
    return (
      <div>
        <li>Title: {book.title} Author: {book.author}  Year: {book.year}</li>
      </div>
    );
  };
  
  export default BookDetail;