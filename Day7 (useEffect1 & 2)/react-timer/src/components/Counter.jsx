import { useEffect } from "react";
import { useState } from "react"


function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let countDown = setInterval(() => {
            // giving a callback to setCounter to prevent stale closure
            setCounter((prevCount) => {
                if (prevCount + 1 === 25) {
                    clearInterval(countDown);
                }
                return prevCount + 1;
            })
        }, 1000);

        // cleanup function for if component is unmounted
        return () => {
            clearInterval(countDown);
        }
    },
        [] // empty array cuz this useEffect should be called just once
    );

    return (
        <>
            Counter: {counter}
        </>
    )
}

export { Counter }