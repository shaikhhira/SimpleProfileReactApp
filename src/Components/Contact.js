import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Profile.css";

function Contact() {
  return (
    <Router>
      <div className="content">
        <p>
          Faceook:
          <a href="https://www.facebook.com/hira.shaikh.522066/">Hira Shaikh</a>
        </p>
        <p>
          Linkedin:
          <a href="https://www.linkedin.com/in/hirashaikh393/">hirashaikh393</a>
        </p>
        <p>Email: shaikhhira393@gmail.com</p>
      </div>
    </Router>
  );
}
export default Contact;
