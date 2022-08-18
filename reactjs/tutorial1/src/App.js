// rfce > create functional component
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
function App() {
  return (
    <Container fluid={false}>
        <Row className="justify-content-center">
            <Col md={5}>
                <h1>Col 1 </h1>
            </Col>
            <Col md={5}>
                <h1>Col 2</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default App