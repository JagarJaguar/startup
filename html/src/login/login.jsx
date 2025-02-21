import React, {useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    const storedUsers = JSON.parse(localStorage.getItem("users")) || {};


  const handleLogin = (e) => {
    if (storedUsers[username] && storedUsers[username] === password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", username);
    }
  };


  const handleCreateAccount = (e) => {
    if (username in storedUsers) {
      setError("Username already exists. Try another one please ;)");
    } else {
      storedUsers[username] = password;
      localStorage.setItem("users", JSON.stringify(storedUsers)); // Stringify to store in JSON
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", username);
    }
  };

  return (
    <main>
    <div>
        <h1><b>Welcome to JagarChat!</b></h1>
        <form method="get" action="chat.html" className="loginForm">
            <div className="input-group">
                <span className="input-group-text">👤</span>
                <input className="form-control" type="text"
                    placeholder="Enter Username" value={username}
                    onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-group">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password"
                    placeholder="Enter Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <NavLink to="chat" className="btn btn-secondary">Login</NavLink>
            <button onClick={handleCreateAccount} className="btn btn-primary">Create</button>
        </form>
    </div>
    <br />
</main>
  );
}