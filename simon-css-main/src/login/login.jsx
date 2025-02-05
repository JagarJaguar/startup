import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  return (
<main className="container-fluid bg-secondary text-center">
        <div>
          <h1>Welcome to Simon</h1>
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input className="form-control" type="password" placeholder="password" />
            </div>
            <NavLink to="/play" className="btn btn-primary">Login</NavLink>
            <NavLink to="/play" className="btn btn-secondary">Create</NavLink>
        </div>
      </main>
  );
}