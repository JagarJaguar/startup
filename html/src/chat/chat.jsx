import React, { useState, useEffect } from 'react';
import './chat.css';

export function Chat() {
    const username = localStorage.getItem("username");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        setMessages(savedMessages);
    }, []); // Load messages when page refresh to save them.

    const sendMessages = () => {
        const trimmedMessage = message.trim();
        if (trimmedMessage) {
            const newMessage = `${username}: ${message}`;
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            localStorage.setItem("messages", JSON.stringify(updatedMessages));
            setMessage('');
        }
    }

    return (
        <main className="chat-page">
            <div className="chat-container">
                <h2>Start Chatting Now!</h2>
                <label htmlFor="textarea"><b>Logged in as: </b> {username}</label>
                <br />
                <textarea id="textarea" name="varTextarea" className="form-control"
                    rows="14" cols="60" readOnly value={messages.join("\n")}>
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
