"use client";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MoviePosterHome from './MoviePosterHome';

export default function MovieList() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer your_access_token_here'
        }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const data = await response.json();
        setNowPlaying(data.results);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };

    fetchNowPlaying();
  }, []);

  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 2.3
    , // Number of movies shown at once
    slidesToScroll: 1
  };

  return (
    <div>
      <div className="mt-14 ml-3 mr-7 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold justify-self-start">Now Showing</h1>
        </div>
        <div className="badges flex items-center"> {/* Centering the content */}
          <div className="badge badge-outline">See More</div>
        </div>
      </div>

      <Slider {...settings}>
        {nowPlaying && nowPlaying.map((movie, index) => (
          <div key={index} className="ml-1 mt-5">
            <MoviePosterHome
              title={movie.title}
              rating={movie.vote_average}
              imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
        ))}
      </Slider>

      <div className="mt-10 ml-3 mr-7 flex justify-between">
        <h1 className="text-2xl font-bold justify-self-start">Popular</h1>
        <div className="badges flex items-center"> {/* Centering the content */}
          <div className="badge badge-outline">See More</div>
        </div>
      </div>
    </div>
  );
}
