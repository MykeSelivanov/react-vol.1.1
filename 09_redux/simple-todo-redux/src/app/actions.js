import {actionTypes } from './actionTypes';

// dispatch an action
export const saveTodo = (userInput) => {
    // return an action
    return {
        type: actionTypes.ADDTODO,
        payload: userInput,
    };
};