import { useState, useEffect } from "react"


export const ControlledForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(name.length < 3) {
           setError("Name must be at least 3 characters long");
           console.log("Name must be at least 3 character long!")
        } else {
            setError("Goood to go");
            console.log("Good to go!")
        }
    }, [name]);
    return(
        <form>
            <input
                name="name"
                type="text"
                placeholder="name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <p style={{color: 'red'}}>{error}</p>
            <input
                name="age"
                type="number"
                placeholder="age"
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <input
                name="hairColor"
                type="text"
                placeholder="Hair Color"
                value={hairColor}
                onChange={e => setHairColor(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    )
}