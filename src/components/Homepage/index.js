import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Card } from "react-bootstrap";
import "./styles.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
// import VIlogo from '';

function Homepage() {
  return (
    <div>
      {/* Info/ */}
      {/* Video */}
      {/* Login Button */}
      {/* Footer */}
      <Container fluid id="main">
        <Row id="info">
          {/* <Col className="text-center"> */}
          <Card style={{ borderRadius: "3%" }}>
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
                About the Event
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                atque ipsam odio laboriosam quis ducimus nemo eveniet odit
                perspiciatis doloremque dolor fuga alias ratione impedit quo
                saepe cum unde repellat, quas exercitationem delectus est
                voluptas. Molestias, ducimus eaque odio illo sunt, nesciunt
                reiciendis modi maxime inventore qui repudiandae nemo culpa,
                laborum possimus delectus deleniti sit saepe? Consequatur nulla
                cumque, harum rem pariatur praesentium nesciunt magnam assumenda
                accusamus doloremque quidem similique quos soluta saepe fugiat
                earum est reiciendis consequuntur fugit dignissimos eaque illum
                officiis labore facilis? Veritatis mollitia aspernatur autem
                iure rem blanditiis accusamus quisquam, officiis corporis vero
                vitae voluptates placeat?
              </Card.Text>
            </Card.Body>
          </Card>
          {/* </Col> */}
        </Row>

        <Row id="videoContainer">
          <ReactPlayer
            // width="100%"
            // height="100%"
            id="videoPlayer"
            controls={true}
            url="https://www.youtube.com/embed/REWoh-3yt28"
          />
        </Row>

        <Row id="focus">
          {/* <Col className="text-center"> */}
          <Card style={{ borderRadius: "3%" }}>
            <Card.Body>
              <Card.Title
                style={{
                  fontWeight: "bolder",
                  fontSize: "2em",
                  textAlign: "center",
                }}
              >
                Start The Hunt!
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Velit dolore amet voluptates id,
                facere quam optio sint maxime, voluptatibus pariatur cumque
                atque rerum iste! Velit.
              </Card.Text>
              <Link
                to="/login"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button id="login" variant="secondary login__button">
                  Login
                </Button>
              </Link>
            </Card.Body>
          </Card>
          {/* <div className="text-center mt-auto">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Velit dolore amet voluptates id, facere quam optio sint maxime,<br /> voluptatibus pariatur cumque atque rerum iste! Velit.</p>
                            <h1 className="display-5">Start The Hunt!</h1>
                            <Link to="/login">
                                <Button variant="secondary login__button">Login</Button>
                            </Link>
                        </div> */}
          {/* </Col> */}
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
  );
}

export default Homepage;
