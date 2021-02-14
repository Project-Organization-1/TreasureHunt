import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
<<<<<<< HEAD
import { Container, Button, Navbar, Row, Col, Card, } from 'react-bootstrap';
=======
import { Container,  Navbar } from 'react-bootstrap';
>>>>>>> aa9d3467f7a96bc57a01238c41a39276b4188e4b
import {Link} from "react-router-dom";

function Level1() {
    return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    {/* <Link to="/" className="header__title"> */}
                    <img
                        id="logo"   
                        alt=""
                        src="/logos/VIlogo.jpg"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                Treasure Hunt
                        {/* </Link> */}
                </Navbar.Brand>
            </Container>
        </Navbar>
        <Container >
            <Row className = "mt-5">
                <Col className = "sm-6">
                <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="images/img1.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  
                  <Link to="/images/img1.png" target="_blank" download>Download</Link>
                </Card.Body>
              </Card>
                </Col>
                <Col className = "sm-6">
                <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="images/img2.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  
                  <Link to="/images/img2.png" target="_blank" download>Download</Link>
                </Card.Body>
              </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Level1;