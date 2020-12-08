import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {

  //get books data from parent component 
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :).</div>
  );
}

export default BookList;