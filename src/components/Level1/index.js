import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Button, Navbar, Row, Col, Card, } from 'react-bootstrap';

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
            <h1 className = "mt-5">Images</h1>
            <Row className = "mt-3">
                <Col className = "sm-6">
                <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="images/camp-karnala-1.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Button variant = "primary">
                  <Link className = "imgLink" to="/images/camp-karnala-1.jpeg" target="_blank" download>Download</Link>
                  </Button>                  
                </Card.Body>
              </Card>
                </Col>
                <Col className = "sm-6">
                <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="images/camp-karnala-1.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  
                  <Button variant = "primary">
                  <Link className = "imgLink" to="/images/camp-karnala-1.jpeg" target="_blank" download>Download</Link>
                  </Button>    
                </Card.Body>
              </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Level1;