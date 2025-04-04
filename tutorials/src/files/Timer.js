import { useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => + 1);
        }, 1000)
    });

    return (
        <>
            <h1>I've rendered {count} times!</h1>

            <button onClick={() => setCount(count + 1)}>Render</button>
        </>
    )
}