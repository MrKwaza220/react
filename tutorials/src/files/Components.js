import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export default function Component1(){
    const [user, setUser] = useState("Kwaza");

    return (
        <UserContext.Provider value={user} >
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </UserContext.Provider>
    )
    
}

export default function Component2(){
    return (
        <>
            <h1> Component2</h1>
        
        </>
    )
}

export default function Component5(){
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}
