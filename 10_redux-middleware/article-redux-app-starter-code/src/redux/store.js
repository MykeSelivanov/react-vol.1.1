// import neccessary libraries and apply middlewares
import { createStore } from "redux";
import { reducer } from './reducers';

const store = createStore(reducer);
export default store;




// The Redux store exposes a simple API for managing the state. 
// The most important methods are:

// - getState, for accessing the current state of the application
// - dispatch, for dispatching an action
// - subscribe, for listening on state changes