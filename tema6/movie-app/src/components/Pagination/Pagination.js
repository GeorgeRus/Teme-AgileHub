import React, { useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { MovieContext } from '../../context/MovieContext';
import styles from './Pagination.css'

const Pagination = () => {
    const {getNextMovies, getPrevMovies, currentPage} = useContext(MovieContext)
    return (
        <Row className="pagination">
            <Col className="pagination-item">
                <Button onClick={() => getPrevMovies(currentPage)} variant="dark">Prev</Button>
            </Col>
            <Col className="pagination-item">
                <Button onClick={() => getNextMovies(currentPage)} variant="dark">Next</Button>
            </Col>
        </Row>
    )
}

export default Pagination;