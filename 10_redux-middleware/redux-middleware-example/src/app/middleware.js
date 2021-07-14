// my own middleware
export const myLogger = (store) => {
    return (next) => {
        return (action) => {
            // do whatever
            console.log('action type: ', action.type);
            console.log('store state: ', store.getState()); // runs before reducer
            return next(action);
        }
    }
}

export default myLogger;