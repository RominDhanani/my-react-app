import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Container,
} from "reactstrap";
import Button from "../Comman/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="fixed-top bg-white font-Roboto">
      <Container>
        <Navbar container={false} expand="lg">
          <NavbarBrand href="/">
            <img src={logo} className="img-fluid" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto text-center text-lg-start" navbar>
              <NavItem className="mt-2 mt-lg-0">
                <NavLink href="/components/">Pricing</NavLink>
              </NavItem>
            </Nav>
            <div className="me-lg-3 text-center text-lg-start mt-2 mt-lg-0">
              <Button
                className={
                  "font-14 fw_medium btn_primary btn_orange bg_orange btn_p1 btn-border2"
                }
              >
                Login
              </Button>
            </div>
            <div className="text-center text-lg-start mt-2 mt-lg-0">
              <Button
                className={
                  "font-14 fw_medium btn_primary btn_orange btn_p1 btn-border2 active"
                }
              >
                Sign up Now
              </Button>
            </div>
            <div className="border_left text-center text-lg-start mt-2 mt-lg-0">
              <span style={{ cursor: "pointer" }}>العربية</span>
            </div>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
