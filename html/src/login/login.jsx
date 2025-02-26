import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Login = (e) => {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        window.location.reload();
    };

    const createAccount = (e) => {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        window.location.reload();
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
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">🔒</span>
                        <input className="form-control" type="password"
                            placeholder="Enter Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <NavLink to='chat' className="btn btn-secondary" onClick={Login}>Login</NavLink>
                    <NavLink to='chat' className="btn btn-primary" onClick={createAccount}>Create</NavLink>
                </form>
            </div>
            <br />
        </main>
    );
}