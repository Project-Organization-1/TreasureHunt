import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        id="logo"   
                        alt=""
                        src="/logos/VIlogo.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                Treasure Hunt
                </Navbar.Brand>
                <Nav.Item className="ml-auto">
                    <Link to="/login">
                        <Button id="login-btn" variant="outline-dark">Login</Button>
                    </Link>
                </Nav.Item>
            </Container>
        </Navbar >
    )
}

export default Header;