import React from 'react';
import { NavLink } from "react-router-dom";

export function Login() {
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
            <NavLink to="chat" className="btn btn-secondary">Login</NavLink>
            <NavLink to="chat" className="btn btn-primary">Create</NavLink>
        </form>
    </div>
    <br />
</main>
  );
}