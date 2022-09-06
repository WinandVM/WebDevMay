import React, { useEffect, useRef, useState } from 'react'
import { Button, Form,Col } from 'react-bootstrap'

function QuizContainer() {
    const [questions, setQuestions] = useState([])
    const [allAnswers, setAllAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0) // state for currentQuestion
    const [userscore, setUserscore] = useState(0)
    const formRef = useRef();
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        async function FetchAllQuestions() {
            let res = await fetch('https://opentdb.com/api.php?amount=10&category=18')
            let data = await res.json();
            setQuestions(data.results)
            let correctAnswer = data.results[currentQuestion].correct_answer
            let incorrectAnswers = data.results[currentQuestion].incorrect_answers
            // console.log(correctAnswer,incorrectAnswers)
            setAllAnswers([correctAnswer, ...incorrectAnswers])
        }
        FetchAllQuestions()

    }, [currentQuestion])


    function NextQuestion(e) {
        console.log(formRef.current.elements['user_answer'].value)
        if(formRef.current.elements['user_answer'].value !==""){
            if (questions[currentQuestion].correct_answer === formRef.current.elements['user_answer'].value) {
                setUserscore(userscore + 1)
            }
            setCurrentQuestion(currentQuestion + 1)
        }else{
            alert('You need to pick an option')
        }
       
    }




    return (
        <div>
            <Col md={3}>
            {
                questions[currentQuestion] !== undefined && questions.length > 0 ?
                    (
                        <div>
                            <h1 className="lead">{questions[currentQuestion].question}</h1>
                            <Form ref={formRef}>
                                {
                                    shuffle(allAnswers).map(option => (
                                        <Form.Check
                                            reverse
                                            label={option}
                                            name="user_answer"
                                            type={'radio'}
                                            value={option}
                                            id={`reverse-2`}
                                        />
                                    ))
                                }

                            </Form>
                            <Button onClick={NextQuestion}>Next Question</Button>
                        </div>
                    ) :
                    'Loading...'
            }
            </Col>
            <Col md={2}>
                <h5>Your score is {userscore}</h5>
            </Col>
        </div>
    )
}

export default QuizContainer