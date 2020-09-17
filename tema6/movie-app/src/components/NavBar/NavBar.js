import React from 'react'
import styles from './NavBar.css'
import Link from 'react-router-dom/Link';

export const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light main-navbar">
            <Link to="/" className="navbar-brand">
                Movies App
            </Link>

            <button 
                className="navbar-toggler" 
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to='/movies-list' className="nav-link">
                            Movies
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
