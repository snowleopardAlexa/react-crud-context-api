import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'

const initialState = {
    book: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    function createBook(book){
        dispatch ({
            type: 'CREATE_BOOK',
            payload: book
        })
    }

    function deleteBook(id) {
        dispatch ({
            type: 'DELETE_BOOK',
            payload: id
        });
    };
 

    function editBook(book){
        dispatch({
            type: 'EDIT_BOOK',
            payload: book
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