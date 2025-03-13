import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Chat } from './chat/chat';
import { About } from './about/about';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        async function verifyAuth() {
            const response = await fetch('/api/messages', {
                method: 'GET'
            });
            setIsLoggedIn(response.ok);
        }
        verifyAuth();
    }, []);

    return (
        <BrowserRouter>
            <>
                <div className='app-body'>
                    <header>
                        <h1>JagarChat</h1>
                        <nav className="navbar">
                            <menu className="nav-link">
                                <li className="nav-item">
                                    <NavLink className='nav-link' to=''>Home</NavLink>
                                </li>
                                {isLoggedIn && (
                                    <li>
                                        <NavLink className='nav-link' to='/chat'>Chat</NavLink>
                                    </li>
                                )}
                                <li>
                                    <NavLink className='nav-link' to='about'>About</NavLink>
                                </li>
                            </menu>
                        </nav>
                    </header>

                    <Routes>
                        <Route path='/' element={<Login />} exact />
                        <Route path='/chat' element={isLoggedIn ? <Chat /> : <Login />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                    <footer className="bg-dark text-white">
                        <div className="container-fluid d-flex justify-content-between align-items-center">
                            <span className="text-reset">Ashton Roma</span>
                            <br />
                            <a className="text-reset" href="https://github.com/JagarJaguar/startup">
                                GitHub
                            </a>
                        </div>
                    </footer>
                </div></>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main style={{ fontSize: '70px' }}>This page doesn't exist!</main>;
}