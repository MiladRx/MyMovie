"use client"
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MoviePosterHome from './MoviePosterHome';
import Link from 'next/link'; // Import Link from Next.js

export default function MovieList() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ViN2U5N2I1N2JhOGUwMGY3MjEyMGQyNTI2M2JlMyIsInN1YiI6IjY2MGZiZTYyZDQ4Y2VlMDE5ZmJkYjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F09Nb0fZo2SGzY1Z-zS8vr3_wkboDFex5AsUVaEqaIw'        }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
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
    slidesToShow: 2.3,
    slidesToScroll: 2
  };

  return (
    <div>
      <div className="mt-3 ml-6 mr-7 mb-4 flex justify-between">
        <div>
          <h2 className="text-2xl  justify-self-start">Now Showing</h2>
        </div>
        <div className="badges flex items-center">
          <div className="badge pt-3 text-gray-400 pb-3 badge-outline">See More</div>
        </div>
      </div>

      <Slider {...settings}>
        {nowPlaying && nowPlaying.map((movie, index) => (
          <Link key={index} href={`/details/${movie.id}`}> {/* Wrap MoviePosterHome with Link */}
            
              <div className="ml-6 mt-0">
                <MoviePosterHome
                  title={movie.title}
                  rating={movie.vote_average}
                  imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </div>
            
          </Link>
        ))}
      </Slider>

      <div className="mt-4 ml-6 mr-7 mb-4 flex justify-between">
        <h2 className="text-2xl  justify-self-start">Popular</h2>
        <div className="badges flex items-center">
          <div className="badge pt-3 pb-3 text-gray-400  badge-outline">See More</div>
        </div>
      </div>
      
    </div>
    
  );
}
