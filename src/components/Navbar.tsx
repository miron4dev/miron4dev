import React, { useState } from "react";
import classNames from "classnames";

const Navbar = () => {

  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBar = () => setShowNavBar(!showNavBar);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" onClick={toggleNavBar}>
            <span className="navbar-toggler-icon"/>
          </button>
        </div>
        <div id="navbar" className={classNames("navbar-collapse collapse", { show: showNavBar })}>
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <div className="header">
                <span>
                  <a href="/" className="nav-link logo" title="Main page">
                    M<span>ironenko </span>E<span>vgeny</span>
                  </a>
                </span>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/about/" title="About Evgeny">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/work/" title="Working experience">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CV.pdf" title="Download CV" target="_blank">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
