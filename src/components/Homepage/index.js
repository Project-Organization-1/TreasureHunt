import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles.css';
import ReactPlayer from 'react-player';
// import VIlogo from '';

function Homepage() {
    return (
        <div>     
            {/* Info/ */}
            {/* Video */}
            {/* Login Button */}
            {/* Footer */}
            <Container fluid id="main">
                <Row className="pt-2">
                    <img id="logo" src="/logos/VIlogo.jpg"></img>
                    <a id="login" className="ml-auto" href="#">Login</a>
                </Row>
                <Row id="info">
                    <Col className="text-center">
                        <h3>About the Event</h3>
                        <p className="mx-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui atque ipsam odio laboriosam quis ducimus nemo eveniet odit perspiciatis doloremque dolor fuga alias ratione impedit quo saepe cum unde repellat, quas exercitationem delectus est voluptas. Molestias, ducimus eaque odio illo sunt, nesciunt reiciendis modi maxime inventore qui repudiandae nemo culpa, laborum possimus delectus deleniti sit saepe? Consequatur nulla cumque, harum rem pariatur praesentium nesciunt magnam assumenda accusamus doloremque quidem similique quos soluta saepe fugiat earum est reiciendis consequuntur fugit dignissimos eaque illum officiis labore facilis? Veritatis mollitia aspernatur autem iure rem blanditiis accusamus quisquam, officiis corporis vero vitae voluptates placeat?</p>
                    </Col>
                </Row>

               <Row id="videoContainer">
                    <ReactPlayer
                    id="videoPlayer"
                    url="https://www.youtube.com/embed/REWoh-3yt28" />
               </Row>

                <Row id="focus">
                    <Col>
                        <div className="text-center mt-auto">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Velit dolore amet voluptates id, facere quam optio sint maxime,<br/> voluptatibus pariatur cumque atque rerum iste! Velit.</p>
                            <h1 className="display-5">Start The Hunt!</h1>
                            <Button variant="secondary">Login</Button>
                        </div>
                    </Col>
                </Row>
                <Container id="footer">
                    <div>
                        <div>
                            <h2>Treasure Hunt</h2>
                            <span>© All rights are reserved </span>
                            <div>
                                <p>VIIT, Pune</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Homepage
