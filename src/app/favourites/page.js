"use client"

import MovieSlider from "@/app/components/MovieSlider";
import getIds from "@/actions/get-ids";
import { useState, useEffect } from "react";


export default function FavouritePage() {
  const [movies, setMovies] = useState([]);
  const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ViN2U5N2I1N2JhOGUwMGY3MjEyMGQyNTI2M2JlMyIsInN1YiI6IjY2MGZiZTYyZDQ4Y2VlMDE5ZmJkYjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F09Nb0fZo2SGzY1Z-zS8vr3_wkboDFex5AsUVaEqaIw";

  async function init() {
    try {
      const ids = await getIds();
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${ids.account_id}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      setMovies(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <h1>Favourites</h1>
      {movies.map(movie => <MovieSlider movie={movie} />)}
      
    </>
  );
}


