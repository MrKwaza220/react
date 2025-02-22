import { WithEditableUser } from "../witheditableuser/WithEditableUser";

export const UserInfoForm = WithEditableUser(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor, hobbies } = user || {};

    return user ? (
      <>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: e.target.value })}
        />
        <label>Hair Color:</label>
        <input
         type="color"
          value={hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
        <button onClick={onSaveUser}>Save</button>
        <button onClick={onResetUser}>Reset</button>

      </>
    ) : <p>Loading...</p>;
  } ,'123}');
