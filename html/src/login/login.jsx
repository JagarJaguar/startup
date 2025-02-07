import React from 'react';

export function Login() {
  return (
    <main>
    <div>
        <h1><b>Welcome to JagarChat!</b></h1>
        <form method="get" action="chat.html">
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
            <button type="submit"
                className="btn btn-secondary">Login</button>
            <button type="submit" class="btn btn-primary">Create
            </button>
        </form>
    </div>
    <br />
</main>
  );
}