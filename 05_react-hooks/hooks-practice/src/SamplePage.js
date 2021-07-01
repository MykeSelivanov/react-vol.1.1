import { useState, useEffect } from "react";
import useCount from './useCount';

export default function SamplePage() {
    // custom hook still inside functional component
    const {count, setCount} = useCount();

    return (
        <div>
            <p> SamplePage Output ------------ </p>
            <button onClick={() => setCount((count) => count + 1)}>Increase</button>
            <p>{count}</p>
            <p>`You clicked {count} times`</p>
        </div>
    );
}