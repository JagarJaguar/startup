import React, { useEffect, useState } from 'react';
import './about.css';


export function About() {
  const [imageUrl, setImageUrl] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [randEmoji, setEmoji] = useState('...');
  const apiKey = 'HUN8WzOMIutLS61FIprb0A==rmEbNfxMnipiAlnY'; 

  useEffect(() => {
    setImageUrl('about_image.jpg');

    fetch(`https://api.api-ninjas.com/v1/emoji?name=face`, {
      headers: { 'X-Api-Key': apiKey }
    })
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setEmoji(data[randomIndex].character);
        } else {
          throw new Error("No emojis found");
        }
      })
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