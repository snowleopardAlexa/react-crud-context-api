export default(state.action) => {
    switch(action.type) {
        case 'CREATE_ARTICLE':
            return {
                ...state,
                article: [...state.article.action.payload]
            }
            default: return state;
    };
}