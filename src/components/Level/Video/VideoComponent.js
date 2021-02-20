import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from 'react-bootstrap';
import ReactPlayer  from 'react-player';

function VideoComponent({videourl}) {
  return (
      <div>
        <Container>
          <h1 className="mt-5">Video</h1>
          <Row>
            <ReactPlayer controls={true} url={videourl} />
          </Row>
        </Container>
      </div>
    )
}

export default VideoComponent;
