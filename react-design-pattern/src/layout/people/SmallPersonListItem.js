export const SmallPersonListItem = ({person}) => {
    const {name, age, hairColor, hobbies} = person;

    return (
        <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>hobbies: </h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
    )
}