import React, { useState, useEffect } from 'react';
import './chat.css';

export function Chat() {
    const username = localStorage.getItem("userName");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('/api/messages')
            .then((response) => response.json())
            .then((messages) => setMessages(messages));
    }, []);

    const sendMessages = async () => {
        const trimmedMessage = message.trim();
        const response = await fetch('/api/message', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email: username, text: trimmedMessage }),
        });

        const newMessage = await response.json();
        setMessages([...messages, newMessage]);
        setMessage('');
    }

    return (
        <main className="chat-page">
            <div className="chat-container">
                <h2>Start Chatting Now!</h2>
                <label htmlFor="textarea"><b>Logged in as: </b> {username}</label>
                <br />
                <textarea id="textarea" name="varTextarea" className="form-control"
                    rows="14" cols="60" readOnly value={messages.map(message => `${message.email}: ${message.text}`).join("\n")}>
                </textarea>
                <br />

                <form method="get" action={sendMessages} className="textForm">
                    <div className="chat-input-group">
                        <input className="form-control" type="text"
                            placeholder="Your message here" value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                        <button type="button" className="btn btn-secondary" onClick={sendMessages}>Send
                            Message</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
