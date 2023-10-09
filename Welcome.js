import React from "react";
import { auth } from "../../firebase";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>WELCOME TO THE APP</h1>
      <button onClick={() => (window.location.href = "/")}>LOGOUT</button>
    </div>
  );
}

export default Welcome;
