import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    // const storedUsers = JSON.parse(localStorage.getItem("users")) || {};


    const handleLogin = (e) => {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem(username, password);
    };


    const handleCreateAccount = (e) => {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem(username, password);
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
                    <button onClick={handleLogin} className="btn btn-secondary">Login</button>
                    <button onClick={handleCreateAccount} className="btn btn-primary">Create</button>
                </form>
            </div>
            <br />
        </main>
    );
}