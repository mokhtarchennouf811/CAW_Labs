import React, { useState } from "react";

export const  UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.username}{" "}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};


