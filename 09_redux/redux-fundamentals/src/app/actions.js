// action: simple object
// {
//     type: "INCREMENT",
//     payload: 1
// }
// action creator: function that will return action
import { INCREMENT, DECREMENT } from './actionTypes';
export const increment = (count) => {
    // return an action
    return {
        type: INCREMENT,
        payload: count,
    };
};
export const decrement = (count) => {
    // return an action
    return {
        type: DECREMENT,
        payload: count,
    };
};