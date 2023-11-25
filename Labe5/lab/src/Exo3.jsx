import React, { useState } from "react";
import AuthenticationForm from "./exo3/Auth";
import {UserList} from "./exo3/UserList";


const Exo3 = () => {
    const [users, setUsers] = useState([]);
  
    const handleFormSubmit = (user) => {
        
      setUsers([...users, user]);
    };
  
    const handleUserDelete = (index) => {
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);
    };

  return (
   <div>
     <h1>Exercice 03</h1>
    <div style={{display:"flex" , flexDirection:"column",justifyContent:"center",gap:"20"}}>  
        <AuthenticationForm onSubmit={handleFormSubmit} />
        <UserList users={users} onDelete={handleUserDelete} />
    </div>
   </div>
  );
};

export default Exo3;
