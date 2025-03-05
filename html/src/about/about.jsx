import React, { useEffect, useState } from 'react';
import './about.css';


export function About() {
  const [imageUrl, setImageUrl] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [randEmoji, setEmoji] = useState('...');

  useEffect(() => {
    setImageUrl('about_image.jpg')

    fetch('https://emojihub.yurace.pro/api/random')
    .then((response) => response.json())
    .then((data) => {
      setEmoji(data.htmlCode[0]); // Use the first HTML code
    })
    .catch((error) => console.error('Error fetching emoji:', error));
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