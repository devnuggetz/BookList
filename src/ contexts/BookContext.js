import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks]=useState([
        {title: 'Apple is goog', id: 1},
        {title: 'Mango is a good fruit', id: 2},
        {title: 'Lal bal Pal', id: 3}
    ])
    return ( 
        <BookContext.Provider value={books}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;