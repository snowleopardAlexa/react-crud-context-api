// Reducer - a pure function, accepting a state and action, and returning a new state, action.
// action - an object literal that describes a change to state. 
// payload - data you care about adding to your state

export default (state, action) => {
    switch(action.type) {
        case 'CREATE_BOOK':
            return {
                ...state,
                book: [...state.book, action.payload]
            };

        case 'EDIT_BOOK':
            const editingBook = action.payload;
            const updatedBook = state.action.map(book => {
                if (book.id === editingBook.id) {
                    return editingBook;
                }
                return book;
            });
            return {
                ...state,
                book: updatedBook
            }  

            case 'DELETE_BOOK':
                return {
                    ...state,
                    book: state.book.filter(book => book.id !== action.payload)
                };
                default: return state;
    }
}