// actions
import { SAVE_ARTICLE, GET_POSTS, GET_POSTS_STARTED, GET_POSTS_FAILED } from './action-types';
import axios from 'axios';

export const saveArticle = (article) => {
    return {
        type: SAVE_ARTICLE,
        payload: article
    }
}

export const getPosts = () => {
    return async (dispatch) => {
        dispatch(getPostsStarted());

        try {
            const { data, error } = await axios.get('http://jsonplaceholder.typicode.com/posts');
            if(error) {
                throw new Error("Error with data fetching");
            }
            dispatch(gotPostsSuccess());
        }
        catch (error) {
            dispatch(getPostsFailed(error));
        }
    }
}

export const getPostsStarted = () => {
    return {
        type: GET_POSTS_STARTED,
    }
}

export const gotPostsSuccess = (posts) => {
    return {
        type: GET_POSTS,
        payload: posts,
    };
};

export const getPostsFailed = (error) => {
    return {
        type: GET_POSTS_FAILED,
        payload: error
    }
}