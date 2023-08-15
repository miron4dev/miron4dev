import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import * as styles from "./Header.module.less";

const Header = () => {

  return (
    <>
      <style type="text/css">{`
         .navbar-collapse {
            flex-grow: 0;
         }
      `}
      </style>
      <Navbar expand="lg" className={styles.navbar}>
        <Container fluid="sm">
          <div className={styles.brandWrapper}>
            <span><Navbar.Brand href="/">M<span>ironenko </span>E<span>vgeny</span></Navbar.Brand></span>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navWrapper}>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/work">Work</Nav.Link>
              <Nav.Link href="/CV.pdf">Download CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
  // return (
  //   <header className="navbar navbar-expand-lg navbar-dark">
  //     <div className="container-fluid">
  //       <div className="navbar-header">
  //         <button className="navbar-toggler" type="button" onClick={toggleNavBar}>
  //           <span className="navbar-toggler-icon" />
  //         </button>
  //       </div>
  //       <div id="navbar" className={classNames("navbar-collapse collapse", { show: showNavBar })}>
  //         <ul className="nav navbar-nav mr-auto">
  //           <li className="nav-item">
  //             <div className="header">
  //               <span>
  //                 <a href="/" className="nav-link logo" title="Main page">
  //                   M<span>ironenko </span>E<span>vgeny</span>
  //                 </a>
  //               </span>
  //             </div>
  //           </li>
  //         </ul>
  //         <ul className="nav navbar-nav">
  //           <li className="nav-item">
  //             <a className="nav-link" href="/about/" title="About Evgeny">
  //               About
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="/work/" title="Working experience">
  //               Work
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="/CV.pdf" title="Download CV" target="_blank">
  //               Download CV
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </header>
  // );
};

export default Header;
