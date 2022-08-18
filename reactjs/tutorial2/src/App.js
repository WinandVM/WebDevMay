import React, { useState } from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
function App() {
    //  push to state array

    //  spread an array into the state array
    // setStudents(students => [...students, 'newValue']);

    const [users,setUsers] = useState([])  // username
    const [currentuser,setCurrentUser] = useState({})
    // fetching data in react.js
    const fetchingData = async ()=>{
        console.log('retrieving data...')
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        setUsers(data)
    }
    // end of fetching data 

    const getDetailOfUser = (param)=>{
        console.log('testing.. detail',param)
        setCurrentUser(param)
    }

    function create_UUID(){
        // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

  return (
    <Container className="bg-dark text-light p-4" fluid={true}>
        <Row className="justify-content-center">
            <Col md={3}>
                <h1>Fetch data</h1>
                <Button onClick={fetchingData}>Get Users Data</Button>
            </Col>
            <Col md={9} className="bg-secondary text-dark">
                <h1>User Details</h1>
                <p><Badge>Phone: </Badge>{currentuser.phone}</p>
                <p><Badge>Email: </Badge>{currentuser.email}</p>
                <p><Badge>Username: </Badge>{currentuser.username}</p>
            </Col>
            {console.log(users)}
            {
                users.map((user,index)=>(
                    <div key={create_UUID()} onClick={()=>getDetailOfUser(user)}>
                    {console.log(create_UUID())}
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </Row>
    </Container>
  )
}

export default App