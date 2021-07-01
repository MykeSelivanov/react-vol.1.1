import React, { useEffect, useState } from 'react'

let ticking;
export default function Timer() {
 
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let timeFromObject = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString() || "Error shwoing time");
        }, 1000)
        return (() => {
            clearInterval(timeFromObject);
        })
    });

    // function to start timer
    const handleClick = () => {
        ticking = setInterval(() => {
            setTimer((timer) => ++timer);
        }, 1000);
    }

    // func to stop timer
    const stopTicking = () => {
        clearInterval(ticking);
    }
    return (
        <div>
            <p><b>Current time is:</b> {currentTime}</p>
            <button onClick={handleClick}>CLick</button>
            <p>{timer}</p>
            <button onClick={stopTicking}>Stop</button>
        </div>
    )
}
