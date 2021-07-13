import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "./store";

export default function Counter() {
    // map state
    const counter = useSelector(state => state.count);
    // map dispatch
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Redux Functional Component Example - Counter</h1>
            <div className="counter">
                <h2>{counter}</h2>
                <button onClick={() => dispatch(increment(counter))}>Increment</button>
                <button onClick={() => dispatch(decrement(counter))}>Decrement</button>
            </div>
        </div>
    )
}
