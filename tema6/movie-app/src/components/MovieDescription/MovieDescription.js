import React from 'react';
import { Card, Button } from 'react-bootstrap';
import style from './MovieDescription.css'

const MovieDescription = ({ movie }) => {

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    {`${movie.Title} (${movie.Year})`}
                </Card.Title>
            </Card.Header>

            <div className="movie-details">
                <Card.Img 
                    variant="top" 
                    src={movie.Poster} 
                    className="movie-details-img"
                />

                <Card.Body>
                    <Card.Text>
                        {`Country: ${movie.Country}`}
                    </Card.Text>
                    <Card.Text>
                        {`Genre: ${movie.Genre}`}
                    </Card.Text>
                    <Card.Text>
                        {`Language: ${movie.Language}`}
                    </Card.Text>
                    <Card.Text>
                        {`Runtime: ${movie.Runtime}`}
                    </Card.Text>
                    <Card.Text>
                        {`Imdb Rating: ${movie.imdbRating}`}
                    </Card.Text>
                    <Card.Text>
                        {`Imdb Votes: ${movie.imdbVotes}`}
                    </Card.Text>
                    <Button 
                        href={`https://www.imdb.com/title/${movie.imdbID}/`} 
                        className="goToImdbBtn"
                        variant="dark">
                            See on IMBD
                    </Button>
                </Card.Body>
            </div>
        </Card>
    )
}   

export default MovieDescription;