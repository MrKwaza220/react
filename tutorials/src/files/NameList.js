import React from "react";

export default function NameList (){
    const names = ["Alice", "Bob", "Charlie"];
    return (
        <>
        <h1>Lists</h1>
        {names.map((name, index) => (
            <li key={index}></li>
        ))}
        </>
    )
}