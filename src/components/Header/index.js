import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../UserContext';

function Header() {
    const { token, setToken } = useContext(UserContext);
    let history = useHistory();

    function logout(){
        history.push('/');
        window.localStorage.removeItem("token");
        setToken(null);
    }

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to="/" className="header__title" style={{display: 'flex'}}>
                    <div style={{display: 'flex'}}>
                        <img
                            id="logo"
                            alt="VIIT Logo"
                            src="/logos/VIlogo.jpg"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        <div>Treasure Hunt</div>
                    </div>
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                {token === null ? <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav> : <Nav>
                    <Nav.Link href='/' onClick={() => logout()}>Logout</Nav.Link>
                </Nav>}
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Header;