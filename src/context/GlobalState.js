import React from 'react';
import Reducer from './Reducer';

const initialState = {
    article: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (<GlobalContext.Provider value={{
            article: state.article,
            createArticle,
        }}>
            {children}
        </GlobalContext.Provider>);
}