import React from 'react';
import './about.css';


export function About() {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [randEmoji, setEmoji] = React.useState('...');

  React.useEffect(() => {
    setImageUrl('about_image.jpg')

    const emojis = ['🔥', '🚀', '🎉', '😎', '🤖', '🌟', '🐱', '🍕'];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[randomIndex]);
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