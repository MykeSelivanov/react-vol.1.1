// all your state will be stored here

// dspatch an action to update a state

// action: simple object with type property and some data(payload)
// const action = {
//     "type": "GET_USERS",
//     "payload": "some_users"
// }

// reducers: just a pure function that takes previous state and action
// updates the state according to type of an action 
// GET_USERS => state new users

import { createStore } from "redux";
import { reducer } from './reducers';
// initial state

// create a store
// we pass reducer to store
const store = createStore(reducer);
export default store;