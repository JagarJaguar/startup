import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState(localStorage.getItem("username") || "");
    const [password, setPassword] = useState("");
    const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    const navigate = useNavigate();

    const Login = (e) => {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.reload();
    };

    const Logout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        navigate('/');
        window.location.reload();
    };

    if (isLoggedIn) {
        return (
            <main>
                <h1>Welcome to JagarChat!</h1>
                <p>Logged in as <b>{username}</b></p>
                <div>
                    <button className="btn btn-primary" onClick={Logout}>Logout</button>
                </div>
            </main>
        );
    }
    

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
                    <NavLink to='/' className="btn btn-secondary" onClick={Login}>Login</NavLink>
                    <NavLink to='/' className="btn btn-primary" onClick={Login}>Create</NavLink>
                </form>
            </div>
            <br />
        </main>
    );
}