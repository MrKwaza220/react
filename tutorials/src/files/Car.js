import { useState } from "react";

export default function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Fiesta",
        year: "2011",
        color: "red"
    })

    const updateColor = () => {
        setCar(previousSate => {
            return {
                ...previousSate, color: "blue"
            }
        });
    }

    return (
        <>
         <h1>My {car.brand}</h1>
         <p>
            It is a {car.color} {car.model} from {car.year}.
         </p>

         <button
         type="button"
         onClick={updateColor}
         >Blue</button>
        </>
    )
}