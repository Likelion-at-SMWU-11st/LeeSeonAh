import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "red" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  console.log("UserList component rendered");
  // App에서 전달받은 props -> users
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(UserList);
