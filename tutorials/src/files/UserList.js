import React, { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Kwaza" },
    { id: 2, name: "Kwaza2" },
    { id: 3, name: "kwaza3" },
  ]);

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              {" - "}
              <button onClick={() => removeUser(user.id)}>Remove</button>
            </li>
          ))}
        </ul> 
      </div>
    </>
  );
}

export default UserList;
