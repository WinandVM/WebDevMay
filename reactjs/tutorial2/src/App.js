import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
function App() {
    const [users,setUsers] = useState([])
    // fetching data in react.js
    const fetchingData = async ()=>{
        console.log('retrieving data...')
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = response.json()
        console.log(data)
    }
    // end of fetching data 
  return (
    <Container className="bg-dark text-light p-5">
        <Row className="justify-content-center">
            <Col md={10}>
                <h1>Fetch data</h1>
                <Button onClick={fetchingData}>Get Users Data</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default App