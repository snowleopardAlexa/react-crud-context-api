import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
    book: []
}

// shares data that can be considered global for a tree of React components
export const GlobalContext = createContext(initialState);

// 
// dispatch - send off to a destination
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    // create book function
    function createBook(book) {
        dispatch ({
            type: 'CREATE_BOOK',
            payload: book // payload - actual info or message in transmitted data as oppossed to automatically generated metadata
        })
    }

    // edit book function
      function editBook(book) {
        dispatch ({
            type: 'EDIT_BOOK',
            payload: book
        })
    }

    // delete book function
    function deleteBook(id) {
        dispatch ({
            type: 'DELETE_BOOK',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
          book: state.book,
          createBook,
          editBook,
          deleteBook
    }}>
        {children}
    </GlobalContext.Provider>); 
}