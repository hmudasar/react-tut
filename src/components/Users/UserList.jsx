import React, { useContext } from "react";
import User from "./User";
import { AppContext } from "../../context";
const UserList = () => {
  const { users } = useContext(AppContext);
  return (
    <div>
      <h3>Available User</h3>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Bio</th>
          <th>Action</th>
        </tr>
        {users.map((user, i) => (
          <User id={user.id} user={user} key={i} />
        ))}
      </table>
    </div>
  );
};

export default UserList;
