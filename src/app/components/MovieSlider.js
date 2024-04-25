"use client";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link'; // Import Link from next/link
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieDetails from './MovieDetails';
import { IoMdStar } from "react-icons/io";


function MovieSlider() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ViN2U5N2I1N2JhOGUwMGY3MjEyMGQyNTI2M2JlMyIsInN1YiI6IjY2MGZiZTYyZDQ4Y2VlMDE5ZmJkYjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F09Nb0fZo2SGzY1Z-zS8vr3_wkboDFex5AsUVaEqaIw'
                }
            };

            try {
                // Fetch popular movies
                const popularMoviesResponse = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
                const popularMoviesData = await popularMoviesResponse.json();
                setPopularMovies(popularMoviesData.results);

                // Fetch movie details
                const movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${popularMoviesData.results[0].id}?language=en-US`, options);
                const movieDetailsData = await movieDetailsResponse.json();
                setMovieDetails(movieDetailsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovieData();
    }, []);

    const settings = {
        infinite: false,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true, // Enable vertical swiping to navigate up and down
    };

    return (
        <Slider {...settings}>
            {popularMovies && popularMovies.map((movie, index) => (
                <div key={index} className="ml-5">
                    <Link href={`/details/${movie.id}`} passHref>
                        <div className="movie-poster-home" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                style={{
                                    marginBottom: '0px',
                                    height: '150px',
                                    minWidth: '100px',
                                    borderRadius: '10px',
                                    marginRight: '10px'
                                }}
                            />
                            <div style={{ flex: '3' }}>
                                <div style={{ marginLeft: '16px', maxWidth: '150px' }}>
                                    <h1 style={{ textAlign: 'left', marginBottom: '8px' }}>{movie.title}</h1>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <IoMdStar style={{ color: '#FFC319' }} />
                                        <p style={{ textAlign: 'left', margin: '0 0 0 5px' }}>{movie.vote_average.toFixed(1)}/10 IMDb</p>
                                    </div>
                                    <MovieDetails movieId={movie.id} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}


        </Slider>
    );
}

export default MovieSlider;
