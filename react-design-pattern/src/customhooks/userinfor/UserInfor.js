import { UseUser } from '../useuser/UseUser';

export const UserInfor = ({userId}) => {
    const user = UseUser(userId);
    const { name, age, hairColor, hobbies } = user || {};
   
    return user ?(
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies && hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    ) : <p>Loading...</p>
}
