import React, { useEffect, useState } from 'react'
// import bootstrap components
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap'
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
    }, [movie_id])
    return (
        <Container className="bg-dark p-0" fluid={true}>
            <div className="p-5 bg-primary text-white movie-img rounded-0" style={{ 'background': `url(https://image.tmdb.org/t/p/w500${movieDetail.poster_path})` }}>
                <h1 className='text-center movie-title'>{movieDetail.original_title}</h1>
            </div>
            <Row className="p-0 m-0 ">
                <Col md={3} className="p-3">
                    <ListGroup>
                        <ListGroup.Item className="bg-none text-light border-0 py-1 ">
                            <Badge bg="warning" text="dark" className="w-100 rounded-0 text-start">ImDB Score: <p className='bg-white rounded-0 d-inline px-2 py-1'>
                                {Math.floor(movieDetail.vote_average)}
                            </p></Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-none text-light border-0 py-1">
                            <Badge bg="warning" className="w-100 rounded-0 text-start" text="dark">Movie Language: <p className='bg-white d-inline rounded-0 px-2 py-1'>{
                                movieDetail.original_language !== undefined ?
                                    movieDetail.original_language.toUpperCase()
                                    :
                                    ''
                            }</p></Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-none text-light border-0 py-1">
                            <Badge bg="warning" className="w-100 rounded-0 text-start" text="dark">Category: </Badge>
                            <ListGroup>
                                {
                                    movieDetail.genres !== undefined ?
                                        movieDetail.genres.map((cat, index) => (
                                            <ListGroup.Item className="rounded-0 py-0" key={cat.id}>{cat.name}</ListGroup.Item>
                                        )) :
                                        ''
                                }
                            </ListGroup>

                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={8}>

                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetail