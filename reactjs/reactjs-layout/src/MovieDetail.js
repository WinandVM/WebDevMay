import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState([])
    // https://api.themoviedb.org/3/movie/616037?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
    const { movie_id } = useParams()
    // async func 
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetail(data)
            })
    }, [])
    return (
        <Container className="bg-dark p-0" fluid={true}>
            <div className="p-5 bg-primary text-white rounded">
                <h1>IMAGE </h1>
            </div>
            <Row>

            </Row>
        </Container>
    )
}

export default MovieDetail