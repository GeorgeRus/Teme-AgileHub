import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Container, Row, Col } from 'react-bootstrap';
import MovieDescription from '../components/MovieDescription/MovieDescription';

const MovieDetails = props => {
    const { getMovie, movies } = useContext(MovieContext); 
    const id = props.match.params.id;
    let movie;

    if(movies){
        movie = getMovie(id);
    }

    return (
        <Container>
            {movie && (
                <Row>
                    <Col>
                        <MovieDescription  movie={movie}/>
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default MovieDetails;
