import {useState} from "react";

export default function Support() {
    const [count, setCount] = useState(0);

    return (
        <button className="outline" onClick={() => setCount(count + 1)}>
        Support {count}
      </button>
    )
}