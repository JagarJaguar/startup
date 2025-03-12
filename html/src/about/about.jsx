import React, { useEffect, useState } from 'react';
import './about.css';


export function About() {
  const [imageUrl, setImageUrl] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [randEmoji, setEmoji] = useState('...');
  const fetchFailedEmojis = ['😊', '😂', '😎', '😜', '🙃', '🤖', '🎃', '🐶', '🚀', '🌈'];

  useEffect(() => {
    setImageUrl('about_image.jpg');

    fetch('https://emoji-api.com/emojis?access_key=5c1932351ea80bc357973f1240c0313948d1a05c')
      .then((response) => { return response.json(); })
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setEmoji(data[randomIndex].character);
      })
      .catch(() => {
        const failedEmoji = fetchFailedEmojis[Math.floor(Math.random() * fetchFailedEmojis.length)];
        setEmoji(failedEmoji);
      });
}, []);

  return (
    <main>
      <div id="picture" className="picture-box">
        <img src={imageUrl} />
      </div>
      <p className="caption" style={{ marginTop: 0 }}>
        <i>Photo by me. I like my car.</i>
      </p>
      <p>
        <b>JagarChat</b> allows users to communicate with each other in{" "}
        <b>real time</b>. Users are able to login using a secure database.
      </p>
      <div id="emoji" alt='random-emoji'>{randEmoji}</div>
      <br />
    </main>
  );
}