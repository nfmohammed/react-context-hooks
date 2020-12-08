import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {

  //Initialize books data from browser's local storage
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  //As the user add/remove books on UI, reflect the change in localStorage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  //share books state and dispatch function with child elements
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;