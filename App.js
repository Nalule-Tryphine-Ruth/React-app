import React, { useState, Fragment } from "react";
import Form from "./Form";
import User from "./User"
import Add from "./Add"
import Form from "./Form";

// Create initial table with static/pre-defined users
// need to make this table available to other portions
// so CRUD is complete with adding/editing/deleting users
const App = () => {
  const usersData = [
    { id: 1, name: "Nick", username: "ebb_n_flow" },
    
  ];

  // sets initial form state - "blank slate"
  const initialFormState = { id: null, name: "", username: "" };

  // set state Hooks syntax - you define the two params in [x, y].
  // useState comes from React import for handling state
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // increment the ID of the new user manually - function will
  // take a user object as a parameter & add them to the users array of objects
  // the ...users code ensures that all the previous users remain in the array
  const addUser = (user) => {
    user.id = user.length + 4;
    setUsers([...users, user]);
  };

  // pass deleteUser through props to UserTable
  // use setter to take ID of user & filter them out of the users array
  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  // deleteUser() fixed -> had to add function to <EditUserForm>
  return (
    <div className="container">
      <h1>Registration</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
