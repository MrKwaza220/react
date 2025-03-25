import React, {useState} from "react";

export default function FavoriteColor() {
    const [color, setColor] = useState("Red");


    return (
        <>
            <h1>My favorite color is {color}</h1>
            <button 
                type="button"
                onClick={() => setColor("Blue")}>
                    Blue
                </button>
        </>
    )
}