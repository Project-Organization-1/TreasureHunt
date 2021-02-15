import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container, Button, Navbar, Row, Col, Card, Accordion, Form } from 'react-bootstrap';
import ReactPlayer from 'react-player';

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
        <div id = "input__container">
        <Form inline>
        <Form.Group>
          <Form.Label htmlFor="input__box">Answer</Form.Label>
          <Form.Control
            type="answer"
            className="mx-sm-3"
            id="input__box"
          />
        </Form.Group>
      </Form>
        </div>
        <Container>
            <h1 className = "mt-5">Images</h1>
            <Row className = "mt-3">
                <Col className = "md-6 mb-5">
                <Card>
                <Card.Img variant="top" src="images/camp-karnala-1.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Button variant = "primary">
                  <Link className = "imgLink" to="/images/camp-karnala-1.jpeg" target="_blank" download>Download</Link>
                  </Button>                  
                </Card.Body>
              </Card>
                </Col>
                <Col className = "md-6 mb-5">
                <Card>
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
        <Row className = "mt-5">
          <Col md={{ span: 6, offset: 3 }}>
          <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="warning" eventKey="1">
                Clue Here!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className = "text-center">This is a clue...</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
          </Col>
        </Row>
        <Container>
        <h1 className = "mt-5">Video</h1>
        <Row id="videoContainer">
          <ReactPlayer
            id="videoPlayer"
            controls="true"
            url="https://www.youtube.com/embed/REWoh-3yt28" />
        </Row>
        </Container>  
    </div>
    )
}

export default Level1;