import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

    useEffect(() => {
      async function verifyAuth() {
          const response = await fetch('/api/auth/verify', { 
              method: 'GET', 
              credentials: 'include' // Ensures cookies are sent
          });
          if (response.ok) {
              setIsAuthenticated(true);
          } else {
              setIsAuthenticated(false);
          }
      }
      verifyAuth();
  }, []);

    async function Login() {
        loginOrCreate(`/api/auth/login`);
      }
    
      async function Create() {
        loginOrCreate(`/api/auth/create`);
      }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ email: username, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) {
          localStorage.setItem('userName', username);
          localStorage.setItem("isAuthenticated", "true");
          setIsAuthenticated(true);
          window.location.reload();
        } else {
          const body = await response.json();
          alert(`Error: ${body.msg}`);
        }
      }

      function Logout() {
        fetch(`/api/auth/logout`, {
            method: 'DELETE',
            credentials: 'include' // Include cookies so the server clears them
        })
        .finally(() => {
            setIsAuthenticated(false);
            localStorage.removeItem("userName");
            window.location.reload();
        });
    }

    if (isAuthenticated) {
        return (
            <main>
                <h1><b>Welcome to JagarChat!</b></h1>
                <p>Logged in as <b>{localStorage.getItem('userName')}</b></p>
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
                <form className="loginForm">
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
                    <button type="button" className="btn btn-secondary" onClick={Login} disabled={!username || !password}>Login</button>
                    <button type="button" className="btn btn-primary" onClick={Create} disabled={!username || !password}>Create</button>
                </form>
            </div>
            <br />
        </main>
    );
}