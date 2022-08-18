import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function TodoList() {
    const [todo, setTodo] = useState('') // store single todo
    const [todos, setTodos] = useState(['javascript','java'])

    const handleInput = (e) => {
        // handle input value attribute
        console.log('handle input', e.target.value, e.target)
        setTodo(e.target.value)
    }

    const handleClick = (e) => {
        console.log('click click testing => ', todo)
        setTodos([...todos,todo]) 
    }
    return (
        <Row className="justify-content-center">
            <Col md={6}>
                <InputGroup className="mb-3">

                    <Form.Control
                        onChange={handleInput}
                        placeholder="todo"
                        aria-label="todo"
                        aria-describedby="basic-addon1"
                    />
                    <Button onClick={handleClick}>Add</Button>
                    {console.log(todos)}
                </InputGroup>
            </Col>
        </Row>
    )
}