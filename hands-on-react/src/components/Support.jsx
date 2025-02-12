import {useState, useEffect, use} from "react";
const pageTitle = document.title;

export default function Support() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        count && (document.title = `${pageTitle}--${count}`);
    });
    return (
        <button className="outline" onClick={() => setCount(count + 1)}>
           {count === 0 ? "Support" : `Thanks for your support! ${count}`}
      </button>
    )
}