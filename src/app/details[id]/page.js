"use client"

import React, { useEffect, useState } from "react";
import MoviePoster from "@/app/components/MoviePoster";
import MovieDescription from "@/app/components/MovieDescription";
import Cast from "@/app/components/Cast";
import { useRouter } from "next/router";

const DetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=YOUR_API_KEY`
        );
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
          throw new Error("Failed to fetch movie details");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  return (
    <div>
      {movieDetails && (
        <Page
          title={movieDetails.title}
          rating={movieDetails.vote_average}
          length={movieDetails.runtime}
          language={movieDetails.original_language}
          description={movieDetails.overview}
        />
      )}
    </div>
  );
};

const Page = ({ title, rating, length, language, description }) => {
  return (
    <section className="">
      <MoviePoster />

      <article className="ml-5">
        <h1 className="font-bold mb-2 text-4xl break-words">{title}</h1>

        <br />

        <div className="badges space-x-2 mb-5">
          <div className="badge badge-outline"></div>
          <div className="badge badge-outline"></div>
          <div className="badge badge-outline"></div>
        </div>

        <div className="rating -ml-1 mb-5">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>

        <section className="flex flex-wrap">
          <div className="flex-1 mr-4 mb-4">
            <h2 className="text-gray-600 text-lg">Length</h2>
            <p className="text-sm font-semibold">{length}</p>
          </div>

          <div className="flex-1 mr-4 mb-4">
            <h2 className="text-gray-600 text-lg">Language</h2>
            <p className="text-sm font-semibold">{language}</p>
          </div>

          <div className="flex-1 mb-4">
            <h2 className="text-gray-600 text-lg">Rating</h2>
            <p className="text-sm font-semibold">{rating}</p>
          </div>
        </section>
      </article>

      <MovieDescription description={description} />
      <Cast
        imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        name="XAXA"
      />
    </section>
  );
};

export default DetailsPage;
