import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import AddUser from "./AddUser";
import UserList from "./UserList";

const UserApi = () => {
  const [users, setUsers] = useState([]);
  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        setUsers([...users, payload.newUser]);
        return;
      case "USER_REMOVE":
        setUsers(users.filter((user) => user.id !== payload.userId));
      default:
        return;
    }
  };
  return (
    <AppContext.Provider value={{ users, dispatchUserEvent }}>
      <AddUser />
      <UserList />
    </AppContext.Provider>
  );
};

export default UserApi;
