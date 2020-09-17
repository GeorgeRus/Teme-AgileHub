import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import sstyle from './Movie.css'

const Movie = ({ movie }) => {
    return (
        <Col key={movie._id} className="movie-item">
            <Card style={{ width: '18rem' }} className="movie">
                <Card.Img variant="top" src={movie.Poster} className="movie"/>
                    <Card.Body>
                        <Card.Title>{`${movie.Title} (${movie.Year})`}</Card.Title>
                    <Button href={`/movie-details/${movie._id}`} variant="dark">See Details</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Movie;