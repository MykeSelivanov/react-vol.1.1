// initial state and reducer
import { actionTypes } from './actionTypes';

const initalState = {
    todos: [],
};
// reducer: pure function that will take prev state and return new state based on action type
export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADDTODO:
            return {
                ...state, 
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};