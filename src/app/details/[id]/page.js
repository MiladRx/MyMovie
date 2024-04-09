"use client";
import React, { useEffect, useState } from 'react';
import MoviePoster from "@/app/components/MoviePoster";
import MovieDescription from "@/app/components/MovieDescription";
import Cast from "@/app/components/Cast";
import "/src/app/globals.css"

export default function Home() {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const movieId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTg0YWVlNjU5YzMwZDViNGZjMDBmNjZhMTkxNzc0NiIsInN1YiI6IjY2MTNjNzI3OTQwOGVjMDE3ZDJiMzUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lI9swl24Y5MAJFEY36cnlJn_bTPzGB7sN40qHvpebtk'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response); // Log the response data to the console
        setMovieDetails(response);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="">
      {movieDetails ? (
        <section>

          <section>
            <MoviePoster imageUrl={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt={movieDetails.title} />
            {/* Other details */}
          </section>

          <article className="ml-5">
            {/* Render movie title */}
            <h2 className="mt-7 mb-3 text-2xl break-words">{movieDetails.title}</h2>



            <div>
              <h1 className=" text-gray-400 mb-3">{movieDetails.vote_average}</h1>

              {/* Render other movie details as needed */}
            </div>

            {/* Render badges for genres */}
            <div className="badges  space-x-2 mb-3">
              {movieDetails.genres.slice(0, 3).map(genre => (
                <div key={genre.id} className="badge bg-blue-100	text-blue-400			p-3 ">{genre.name}</div>
              ))}
            </div>

            {/* Render other movie details as needed */}

            {/* Render movie details */}
            <section className="flex flex-wrap">
              <div className="flex-1 mr-4 mb-4">
                <h3 className="text-gray-600 text-lg">Length</h3>
                <p className="text-sm font-semibold">{movieDetails.runtime} MIN</p>
              </div>

              <div className="flex-1 mr-4 mb-4">
                <h3 className="text-gray-600 text-lg">Language</h3>
                <p className="text-sm uppercase font-semibold">{movieDetails.original_language}</p>
              </div>

              <div className="flex-1 mb-4">
                <h3 className="text-gray-600 text-lg">Rating</h3>
                <p className="text-sm font-semibold">{movieDetails.vote_average}</p>
              </div>
            </section>
          </article>

          {/* Render movie description */}
          <MovieDescription description={movieDetails.overview} />

          {/* Render cast */}
          <Cast
            imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            name="XAXA"
          />
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
