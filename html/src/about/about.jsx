import React from 'react';
import './about.css';


export function About() {
  return (
<main>
  <div id="picture" className="picture-box">
    <img src="about_image.jpg" />
  </div>
  <p className="caption" style={{ marginTop: 0 }}>
    <i>Photo by me. I like my car.</i>
  </p>
  <p>
    <b>JagarChat</b> allows users to communicate with each other in{" "}
    <b>real time</b>. Users are able to login using a secure database.
  </p>
  <div id="emoji">😜</div>
  <br />
</main>
  );
}