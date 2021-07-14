// actions
import { SAVE_ARTICLE, GET_POSTS } from './action-types';

export const saveArticle = (article) => {
    return {
        type: SAVE_ARTICLE,
        payload: article
    }
}