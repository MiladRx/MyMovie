"use client";


import React, { useEffect, useState } from 'react';
import MoviePoster from "@/app/components/MoviePoster";
import MovieDescription from "@/app/components/MovieDescription";
import Cast from "@/app/components/Cast";
import { IoMdStar } from 'react-icons/io';

const getIds = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/account',
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch ids');
  }
};

export default function Details({ params }) {
  const [movieDetails, setMovieDetails] = useState(null);

 
  const bookmarkHandler = async () => {
    try {
      const ids = await getIds();
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${ids.account_id}/favorite`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN,
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: params.id, 
            favorite: true,
          }),
        }
      );
    
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTg0YWVlNjU5YzMwZDViNGZjMDBmNjZhMTkxNzc0NiIsInN1YiI6IjY2MTNjNzI3OTQwOGVjMDE3ZDJiMzUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lI9swl24Y5MAJFEY36cnlJn_bTPzGB7sN40qHvpebtk'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
      })
      .catch(err => console.error(err));
  }, [params.id]);

  return (
   <main>
      {movieDetails ? (
        <section>
          <section>
            <MoviePoster imageUrl={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt={movieDetails.title} />
          
          </section>

          <article className="ml-6 mt-7 ">
            <div className="flex items-center">
              <h1 className="mb-0 text-3xl break-words">{movieDetails.title}</h1>

              <div className="flex ml-28 items-center">
                <button onClick={bookmarkHandler} title="Save" className="cursor-pointer ml-auto flex items-center justify-center mr-5 fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2">
                  <svg viewBox="0 -0.5 25 25" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div style={{ marginTop: "17px", marginBottom: "17px", display: 'flex', alignItems: 'center' }}>
              <IoMdStar style={{ color: '#FFC319' }} />
              <p className="text-gray-400  " style={{ marginLeft: '3px', marginBottom: '0' }}>{movieDetails.vote_average.toFixed(1)}/10 IMDb</p>
            </div>

            {/* Render genre  */}
            <div className="badges  space-x-2 ml- -ml-0.2  mb-4">
              {movieDetails.genres.slice(0, 3).map(genre => (
                <div key={genre.id} className="badge bg-blue-100	text-blue-400	p-3 ">{genre.name}</div>
              ))}
            </div>

          
            {/* Render movie detaljer */}
            <section className="flex flex-wrap">
              <div className="flex-1 mr-4 mb-0">
                <h3 className="text-gray-600 text-lg">Length</h3>
                <p className="text-sm font-semibold">{movieDetails.runtime} MIN</p>
              </div>

              <div className="flex-1 mr-4 mb-0">
                <h3 className="text-gray-600 text-lg">Language</h3>
                <p className="text-sm uppercase font-semibold">{movieDetails.original_language}</p>
              </div>

              <div className="flex-1 mb-0">
                <h3 className="text-gray-600 text-lg">Rating</h3>
                <p className="text-sm font-semibold">{movieDetails.vote_average}</p>
              </div>
            </section>
          </article>

          {/* Render movie beskrivelse */}
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
