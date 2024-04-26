"use client"

import React, { useState, useEffect } from 'react';
import MovieSearchInput from './MovieSearchInput';

function Nav() {
   
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ViN2U5N2I1N2JhOGUwMGY3MjEyMGQyNTI2M2JlMyIsInN1YiI6IjY2MGZiZTYyZDQ4Y2VlMDE5ZmJkYjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F09Nb0fZo2SGzY1Z-zS8vr3_wkboDFex5AsUVaEqaIw'
            }
        };

        const fetchMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie data');
                }
                const data = await response.json();
                setMovies(data.results); 
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();

      
       
         
        
    }, []);

    const handleSearch = (searchTerm) => {
      
    };

    return (
        <div className="mt-5 mb navbar bg-base-100 relative w-full">
            <div className="navbar-start">
             
            </div>
            <div className="navbar-center">
            
                <MovieSearchInput movies={movies} onSearch={handleSearch} />
            </div>
            <div className="navbar-end">
               
                <input type="checkbox" value="synthwave" className="toggle mr-5 theme-controller" />
            </div>
        </div>
    );
}

export default Nav;
