import { useEffect, useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, []);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}
            >+</button>
            <p>calculation: {calculation}</p>
        </>
    )
}