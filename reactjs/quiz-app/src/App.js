import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import QuizContainer from './QuizContainer'

function App() {
  return (
    <Container className="text-center">
      
        <Row>
        <QuizContainer />
        </Row>
    </Container>
  )
}

export default App