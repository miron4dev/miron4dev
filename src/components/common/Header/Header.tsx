import React from "react";
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
      <Navbar expand="lg" variant="dark">
        <Container fluid="sm">
          <div className={styles.brandWrapper}>
            <span><Navbar.Brand href="/">M<span>ironenko </span>E<span>vgeny</span></Navbar.Brand></span>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
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
};

export default Header;
