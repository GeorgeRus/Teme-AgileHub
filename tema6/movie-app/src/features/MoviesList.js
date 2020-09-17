import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
import Movie from '../components/Movie/Movie';
import Pagination from '../components/Pagination/Pagination';
import { MovieContext } from '../context/MovieContext'

const MoviesList = () => {

    const { movies, getNextMovies, getPrevMovies } = useContext(MovieContext)

    return (
        <Container>
            { movies.length && (
                    <Row>
                        { movies.map(movie => <Movie key={movie._id} movie={movie} />) }
                    </Row>
                )
            }
            <Pagination getPrevMovies={getPrevMovies} getNextMovies={getNextMovies}/>
        </Container>
    )
}

export default MoviesList;
