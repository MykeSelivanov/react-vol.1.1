// custom hook
import { useState, useEffect } from 'react';

export default function useCount() {
    const [count, setCount] = useState(0); // Number

    useEffect(() => {
        // componentDidMount
        document.title = `You clicked ${count} times`;
        // fetch
        // const timerId = setInterval();
        // componentWillUnmount
        return () => {
            console.log("App is unmounting");
            // clearInterval(timerId);
        };
    }, [count]);

    return { count, setCount };

}

// App.js => props.name => Child.js
    // Child.js => props.name
        // function useCallback(showName() {logic here}, [props.name])