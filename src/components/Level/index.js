import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import "./styles.css";

import {
  Container,
  Button,
  Navbar,
  Row,
  Col,
  Card,
  Accordion,
  Form,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function Level({
  img1True,
  img1Path,
  img2True,
  img2Path,
  clueTrue,
  clue,
  videoTrue,
  videourl,
}) {
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
        <Form id="input__container">
          <Form.Group>
            <Form.Label htmlFor="input__box">Answer</Form.Label>
            <Form.Control type="text" className="mx-sm-3" id="input__box" />
          </Form.Group>
          <Button id="submit__button" variant="secondary">Submit</Button>
        </Form>
      </Container>
      {img1True && (
        <Container>
          <h1 className="mt-5">Image 1</h1>
          <Row className="mt-3">
            <Col className="mb-5" md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Img variant="top" src={img1Path} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Button className="download__button" variant="primary">
                    <Link
                      className="imgLink"
                      to={img1Path}
                      target="_blank"
                      download
                    >
                      Download <i className="fa fa-download" aria-hidden="true"></i>
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      {img2True && (
        <Container>
          <h1 className="mt-5">Image 1</h1>
          <Row className="mt-3">
            <Col className="mb-5" md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Img variant="top" src={img2Path} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>

                  <Button className="download__button" variant="primary">
                    <Link
                      className="imgLink"
                      to={img2Path}
                      target="_blank"
                      download
                    >
                      Download <i className="fa fa-download" aria-hidden="true"></i>
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      {clueTrue && (
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="warning" eventKey="1">
                    Clue Here!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="text-center">{clue}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      )}
      {videoTrue && (
        <Container>
          <h1 className="mt-5">Video</h1>
          <Row id="videoContainer">
            <ReactPlayer id="videoPlayer" controls={true} url={videourl} />
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Level;
