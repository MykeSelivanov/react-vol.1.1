// reducers
// Use concat(), slice(), and …spread for arrays
// Use Object.assign() and …spread for objects

import { SAVE_ARTICLE, GET_POSTS, GET_POSTS_STARTED, GET_POSTS_FAILED } from './action-types';

const initialState = {
    articles: [],
    posts: [],
    loading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            };
        case GET_POSTS_STARTED:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                loading: false,
                error: null
            }
        case GET_POSTS_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
