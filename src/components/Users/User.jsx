import React, { useContext } from "react";
import { AppContext } from "../../context";

const User = ({ user }) => {
  const { dispatchUserEvent } = useContext(AppContext);
  const handleRemoveUser = () => {
    dispatchUserEvent("USER_REMOVE", { userId: user.id });
  };
  return (
    <tr id={user.id}>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.bio}</td>
      <td>
        <button onClick={handleRemoveUser}>Delete user</button>
      </td>
    </tr>
  );
};

export default User;
