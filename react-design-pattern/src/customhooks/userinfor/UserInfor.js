import { UseDataSource } from '../usedatasource/UseDataSource';
import { useResource } from '../useresource/UseResource';
import axios from 'axios';

const serverResoure = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
}

export const UserInfor = ({userId}) => {
    // const user = useResource(`/users/${userId}`)

    const user = UseDataSource(serverResoure(`/users/${userId}`));

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
