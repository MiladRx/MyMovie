import React, { useState, useEffect } from "react";

const Cast = () => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ViN2U5N2I1N2JhOGUwMGY3MjEyMGQyNTI2M2JlMyIsInN1YiI6IjY2MGZiZTYyZDQ4Y2VlMDE5ZmJkYjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F09Nb0fZo2SGzY1Z-zS8vr3_wkboDFex5AsUVaEqaIw'
        }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/693134/credits?language=en-US', options);
        const data = await response.json();
        
        setCast(data.cast.slice(0, 4));
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, []); 

  return (
    <section>
      <h2 className="mb-4 pl-5 text-indigo-900 text-2xl">Cast</h2>
      <div className="grid grid-cols-4 gap-1">
        {cast.map((actor) => (
          <div key={actor.id} className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-md object-cover"
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <div className="mt-2 text-center">
              <p className="text-sm max-w-16">{actor.name}</p>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cast;
