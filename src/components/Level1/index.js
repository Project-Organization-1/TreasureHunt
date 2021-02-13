import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Level1() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="header__title">
                    <img
                        id="logo"   
                        alt=""
                        src="/logos/VIlogo.jpg"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                Treasure Hunt
                        </Link>
                </Navbar.Brand>
            </Container>
        </Navbar >
    )
}

export default Level1;