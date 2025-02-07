import React from 'react';
import './chat.css';

export function Chat() {
  return (
    <main>
    <h2>Start Chatting Now!</h2>
    <label for="textarea"><b>Logged in as: </b> Username</label>
    <br />
    <textarea id="textarea" name="varTextarea" className="form-control"
        rows="14" cols="60"
        readonly>











Doc: How is HTML going so far? 
Melissa: Hey guys!
Bob: Hi 😄
    </textarea>
    <br />

    <form method="get" action="chat.html" className="textForm">
        <div className="input-group">
            <input className="form-control" type="text"
                placeholder="Your message here" />
            <button type="button" class="btn btn-primary">😀</button>
            <button type="submit" class="btn btn-secondary">Send
                Message</button>
        </div>
    </form>
    </main>
  );
}