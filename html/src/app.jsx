import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <><header>
          <h1>JagarChat</h1>
          <nav className="navbar">
              <menu className="nav-link">
                  <li className="nav-item">
                      <a className="nav-link active" href="index.html">
                          Home
                      </a>
                  </li>
                  <li>
                      <a className="nav-link" href="chat.html">
                          Chat
                      </a>
                  </li>
                  <li>
                      <a className="nav-link" href="about.html">
                          About
                      </a>
                  </li>
              </menu>
          </nav>
      </header><main>jsadjkoaj</main><footer className="bg-dark text-white">
              <div className="container-fluid d-flex justify-content-between align-items-center">
                  <span className="text-reset">Author Name(s)</span>
                  <br />
                  <a className="text-reset" href="https://github.com/JagarJaguar/startup">
                      GitHub
                  </a>
              </div>
          </footer></>
  );
}