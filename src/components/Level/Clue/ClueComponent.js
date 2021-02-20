import React from 'react'
import {Row, Col, Accordion, Card} from 'react-bootstrap'

function ClueComponent({clue}) {
  return (
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
  )
}

export default ClueComponent;

