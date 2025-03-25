import React, { useEffect, useState } from "react";

export default function FetchData(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <>
            <h2>Users List:</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

        </>
    )
}