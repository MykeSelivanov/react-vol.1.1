// reducers
// Use concat(), slice(), and …spread for arrays
// Use Object.assign() and …spread for objects

import { SAVE_ARTICLE, GET_POSTS } from './action-types';

const initialState = {
    articles: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            };
        default:
            return state;
    }
}
