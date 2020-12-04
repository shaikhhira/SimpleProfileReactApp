import React from "react";
import "./Profile.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Introduction from "./Introduction";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";

function Profile() {
  return (
    <Router>
      <div id="container">
        <header>
          <div className="quoteoftheday">Profile</div>
          <div className="name">Hira.</div>
        </header>

        <article>
          <div className="quote">
            <h2>
              "Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand"
            </h2>
          </div>

          <div className="quoteby">
            <h4>Hira Shaikh</h4>
          </div>
        </article>

        <footer>
          <div className="skills">
            <h6>Menu</h6>
            <ul>
              <li>
                <Link to="/">Introduction</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/experience">Professional Experience</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <Introduction />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/experience">
              <Experience />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </footer>
      </div>
    </Router>
  );
}
export default Profile;
