import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isAuthenticated") === "true");


    const Login = (e) => {
        e.preventDefault();
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        setIsLoggedIn(true);
    };

    return (
        <main>
            <div>
                <h1><b>Welcome to JagarChat!</b></h1>
                <form method="get" action="chat.html" className="loginForm">
                    <div className="input-group">
                        <span className="input-group-text">👤</span>
                        <input className="form-control" type="text"
                            placeholder="Enter Username" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">🔒</span>
                        <input className="form-control" type="password"
                            placeholder="Enter Password" />
                    </div>
                    <NavLink to='chat' className="btn btn-secondary">Login</NavLink>
                    <NavLink to='chat' className="btn btn-primary">Create</NavLink>
                </form>
            </div>
            <br />
        </main>
    );
}