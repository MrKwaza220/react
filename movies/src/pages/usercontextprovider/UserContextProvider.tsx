import { createContext, useEffect, useState } from "react";

export interface User {
  name: string;
  age: number;
  isMarried: boolean;
}

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (user: User) => void;
}

const ContextInitialValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(ContextInitialValues);

interface Props {
  children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers([
      { name: "John", age: 25, isMarried: false },
      { name: "Jane", age: 22, isMarried: true },
      { name: "Doe", age: 30, isMarried: false },
    ]);
  }, []);

  const addUser = (user: User) => null;
  const updateUser = (user: User) => null;
  const deleteUser = (user: User) => null;

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {" "}
      {props.children}
    </UserContext.Provider>
  );
};
