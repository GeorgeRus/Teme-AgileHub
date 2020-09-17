import React, {useState, useEffect} from 'react';
const MovieContext = React.createContext();


const MovieProvider = ({ children }) => { 

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(10);

    const getMovies = async currentPage => {
        const response = await fetch( `https://movies-app-siit.herokuapp.com/movies?take=10&skip=${currentPage * numberOfPages}`);
        const data = await response.json();

        const { pagination, results } = data;
        console.log(results, 'results')
        
        setNumberOfPages(pagination.numberOfPages)
        setMovies(results)
    }

    useEffect(() => {
        getMovies(currentPage)
    }, [currentPage])

    const getMovie =  id => {
        const movie = movies.find(movie => movie._id == id);
        return movie;
    }

    const getPrevMovies = currentPage => {
        if(currentPage === 0) return;
        setCurrentPage(currentPage => currentPage - 1);
    }

    const getNextMovies = currentPage => {
        if(currentPage === numberOfPages - 1) return;
        setCurrentPage(currentPage => currentPage + 1);
    }

    return(
        <MovieContext.Provider 
            value={{
                movies,
                currentPage,
                numberOfPages,
                getNextMovies,
                getPrevMovies,
                getMovies,
                getMovie
            }}>
            { children }
        </MovieContext.Provider>
    )
}


export {MovieProvider, MovieContext};
