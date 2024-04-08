"use client"
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link'; // Import Link from next/link
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MovieSlider() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ViN2U5N2I1N2JhOGUwMGY3MjEyMGQyNTI2M2JlMyIsInN1YiI6IjY2MGZiZTYyZDQ4Y2VlMDE5ZmJkYjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F09Nb0fZo2SGzY1Z-zS8vr3_wkboDFex5AsUVaEqaIw'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => {
                setPopularMovies(data.results);
            })
            .catch(error => {
                console.error('Error fetching popular movies:', error);
            });
    }, []);

    const settings = {
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true, // Enable vertical swiping to navigate up and down
    };

    return (
        <Slider {...settings}>
            {popularMovies && popularMovies.map((movie, index) => (
                <div key={index} className="ml-5">
                    <Link href={`/details/${movie.id}`} passHref> {/* Use Link from next/link */}
                        <a>
                        <div className="movie-poster-home" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{
                                        marginBottom: '0px',
                                        height: '170px',
                                        minWidth: '100px',
                                        borderRadius: '10px',
                                        marginRight: '10px'
                                    }}
                                />
                                <div style={{ flex: '3' }}>
                                    <div style={{ marginLeft: '10px', maxWidth: '150px' }}>
                                        <h2 style={{ fontWeight: 'bold', textAlign: 'left' }}>{movie.title}</h2>
                                        <p style={{ textAlign: 'left' }}>Rating: {movie.vote_average}</p>
                                        {/* You may display additional information here if needed */}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </Slider>
    );
}

export default MovieSlider;
