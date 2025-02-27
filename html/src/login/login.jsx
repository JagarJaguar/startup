import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
        localStorage.removeItem("messages");
        navigate('/');
        window.location.reload();
    };

    if (isLoggedIn) {
        return (
            <main>
                <h1><b>Welcome to JagarChat!</b></h1>
                <p>Logged in as <b>{username}</b></p>
                <div>
                    <button className="btn btn-danger" onClick={Logout}>Logout</button>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div>
                <h1><b>Welcome to JagarChat!</b></h1>
                <form method="get" action="/" className="loginForm">
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
                    <button className="btn btn-secondary" onClick={Login} disabled={!username || !password}>Login</button>
                    <button className="btn btn-primary" onClick={Login} disabled={!username || !password}>Create</button>
                </form>
            </div>
            <br />
        </main>
    );
}