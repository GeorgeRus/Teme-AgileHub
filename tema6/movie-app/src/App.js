import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';      
import MovieDetails from './features/MovieDetails'
import MoviesList from './features/MoviesList'
import { NavBar } from './components/NavBar/NavBar';
import { MovieProvider } from './context/MovieContext';

const App = () => {
  return(
    <MovieProvider>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path={["/", "/movies-list"]} component={MoviesList}/>
          <Route exact path={["/movie-details/:id"]} component={MovieDetails}/>
        </Switch>
      </Router>
    </MovieProvider>
  )
}

export default App;
