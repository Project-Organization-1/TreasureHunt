import React from 'react'
import {Container, Row} from 'react-bootstrap';
import {ReactPlayer} from 'react-player';

function VideoComponent({videourl}) {
    return (
        <Container>
          <h1 className="mt-5">Video</h1>
          <Row id="videoContainer">
            <ReactPlayer id="videoPlayer" controls={true} url={videourl} />
          </Row>
        </Container>
    )
}

export default VideoComponent;
