import React from 'react'
import { }

function SubmitBoxComponent() {
    return (
        <div>
            <Container>
                <Form id="input__container">
                    <Form.Group>
                        <Form.Label htmlFor="input__box">Answer</Form.Label>
                        <Form.Control type="text" className="mx-sm-3" id="input__box" />
                    </Form.Group>
                    <Button id="submit__button" variant="secondary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default SubmitBoxComponent;
