import React from "react";
import {NavLink} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import BBBot from "../../../assets/bb bot.png";

import "./Navbar.css";

function NavigationBar() {
    return (
        <Navbar id="app-navbar" expand="md" variant="dark">
            <Navbar.Brand as={NavLink} exact to="/">
                <img src={BBBot} alt="game logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="inner-navbar-nav" />
            <Navbar.Collapse id="inner-navbar-nav">
                <Nav className="ml-auto" as="ul">
                    <NavLinkItem exact to="/">
                        HOME
                    </NavLinkItem>
                    <NavLinkItem id="navbar-play" to="/play">PLAY</NavLinkItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

function NavLinkItem(props) {
    return (
        <Nav.Item className="navbar-item" as="li">
            <Nav.Link as={NavLink} {...props} />
        </Nav.Item>
    );
}

export default NavigationBar;
