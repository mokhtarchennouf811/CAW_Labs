import React, { useState } from "react";

const AuthenticationForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"20"}}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" style={{marginTop:"20px"}}>Submit</button>
    </form>
  );
};

export default AuthenticationForm;