import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { myLogger } from './middleware';
import axios from 'axios';
import ReduxThunk from 'redux-thunk';

// action types
const GET_PETS_FROM_SERVER = "GET_PETS_FROM_SERVER";

const gotPets = (pets) => {
    return {
        type: GET_PETS_FROM_SERVER,
        payload: pets
    }
}

// actions creator
export const getPets = () => {
    // fetch pets here
    return async (dispatch) => {
        const { data } = await axios.get('/pets');
        dispatch(gotPets(data));
    }
}

// reducer
const initialState = {
    pets: []
}

const reducer = (state = initialState, action) => {
    // const {type, payload} = action;
    switch (action.type) {
        case GET_PETS_FROM_SERVER:
            return {
                ...state,
                pets: action.payload
            }
        default:
            return state;
    }
}

const middlewares = composeWithDevTools(applyMiddleware(myLogger, ReduxThunk));
const store = createStore(reducer, middlewares);
export default store;

// middlewares: custom
// hwo to work with async code in redux
// redux thunk
// redux dev tools middleware
// concurrently package
// json-server
