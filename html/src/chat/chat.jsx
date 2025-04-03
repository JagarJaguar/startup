import React, { useState, useEffect, useRef, useCallback } from 'react';
import './chat.css';

export function Chat() {
    const username = localStorage.getItem("userName");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const bottomOfText = useRef(null);
    const ws = useRef(null);

    const fetchMessages = useCallback(() => {
        fetch('/api/messages', {credentials: 'include'})
            .then((response) => response.json())
            .then((messages) => setMessages(messages));
    }, []);

    useEffect(() => {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        ws.current = new WebSocket(`${protocol}://${window.location.host}/ws`);
        ws.current.onopen = () => {
            console.log('WebSocket connection established! Chat should work.');
        };

        ws.current.onmessage = (event) => {
            fetchMessages();
        };

        const refresh = setInterval(fetchMessages, 500);

        return () => {
            clearInterval(refresh);
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [fetchMessages]);

    useEffect(() => {
        if (bottomOfText.current) {
            bottomOfText.current.scrollTop = bottomOfText.current.scrollHeight;
        }
    }, [messages]);

    const sendMessages = async () => {
        const trimmedMessage = message.trim();
        const response = await fetch('/api/message', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email: username, text: trimmedMessage }),
        });

        if (response.ok) {
            if (ws.current && ws.current.readyState === WebSocket.OPEN) {
                ws.current.send(JSON.stringify({ type: 'message_sent' }));
            }
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
                    rows="14" cols="60"
                    ref={bottomOfText}
                    readOnly value={messages.map(message => `${message.email}: ${message.text}`).join("\n")}>
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
