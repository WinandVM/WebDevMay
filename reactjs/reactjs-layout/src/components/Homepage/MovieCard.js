import React from 'react'
import { Card } from 'react-bootstrap'

function MovieCard({movie,test}) {
    return (
        <li key={movie.id} id="movie1" data-toggle="modal" data-target="#moviedetail">
        <div className="movie">
          <figure className="movie__figure">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie__poster"/>
            <figcaption><span className="movie__vote">4.5</span></figcaption>
            <h2 className="movie__title">Godzilla vs. Kong</h2>
          </figure>
        </div>
      </li>
    )
}

export default MovieCard