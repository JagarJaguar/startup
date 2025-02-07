import React from 'react';
import './chat.css';

export function Chat() {
    return (
        <main className="chat-page">
            <div className="chat-container">
                <h2>Start Chatting Now!</h2>
                <label htmlFor="textarea"><b>Logged in as: </b> Username</label>
                <br />
                <textarea id="textarea" name="varTextarea" className="form-control" rows="14" cols="60"readOnly>
                    Melissa: How is HTML going so far?
                </textarea>
                <br />

                <form method="get" action="chat.html" className="textForm">
                    <div className="chat-input-group">
                        <input className="form-control" type="text"
                            placeholder="Your message here" />
                        <button type="button" className="btn btn-primary">😀</button>
                        <button type="button" className="btn btn-secondary">Send
                            Message</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
