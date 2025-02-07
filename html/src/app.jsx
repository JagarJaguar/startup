import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Chat } from './chat/chat';
import { About } from './about/about';

export default function App() {
    return (
        <BrowserRouter>
            <>
            <body>
            <header>
                <h1>JagarChat</h1>
                <nav className="navbar">
                    <menu className="nav-link">
                        <li className="nav-item">
                            <NavLink className='nav-link' to=''>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='chat'>Chat</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='about'>About</NavLink>
                        </li>
                    </menu>
                </nav>
            </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="bg-dark text-white">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <span className="text-reset">Author Name(s)</span>
                        <br />
                        <a className="text-reset" href="https://github.com/JagarJaguar/startup">
                            GitHub
                        </a>
                    </div>
                </footer>
                </body></>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main style={{fontSize: '70px'}}>This page doesn't exist!</main>;
}