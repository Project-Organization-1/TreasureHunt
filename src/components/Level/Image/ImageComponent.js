import React from 'react'
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ImageComponent({ imgPath }) {
    return (
        <div>
            <Container>
                <h1 className="mt-5">Image</h1>
                <Row className="mt-3">
                    <Col className="mb-5" md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Img variant="top" src={imgPath} />
                            <Card.Body>
                                <Card.Title className="header__title">Card Title</Card.Title>
                                <Button className = "download__button"variant="primary">
                                    <Link
                                        className="imgLink"
                                        to={imgPath}
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
        </div>
    )
}

export default ImageComponent;
