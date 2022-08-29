import React, { useEffect, useState } from 'react'
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
        <div>
            {console.log(movie_id)}
            {
                console.log(movieDetail)
            }
            <h1>{movieDetail.original_title}</h1>
        </div>
    )
}

export default MovieDetail