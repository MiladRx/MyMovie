// MoviePoster.js
import React from "react";

const MoviePoster = ({ imageUrl, alt }) => {
  return (
    <div className="w-100 h-64 bg-gray-300 bg-cover bg-center rounded-md" style={{ position: "relative" }}>
      <img className="absolute inset-0 w-full h-full object-cover" src={imageUrl} alt={alt} />
    </div>
  );
};

export default MoviePoster;
