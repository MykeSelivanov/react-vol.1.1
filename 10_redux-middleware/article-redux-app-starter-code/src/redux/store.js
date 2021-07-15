// import neccessary libraries and apply middlewares
import { applyMiddleware, createStore } from "redux";
import { reducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const allMiddlewares = applyMiddleware(logger, ReduxThunk);
const store = createStore(reducer, composeWithDevTools(allMiddlewares));
export default store;




// The Redux store exposes a simple API for managing the state. 
// The most important methods are:

// - getState, for accessing the current state of the application
// - dispatch, for dispatching an action
// - subscribe, for listening on state changes