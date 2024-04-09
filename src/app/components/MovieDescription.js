// MovieDescription.js
import React from "react";

const MovieDescription = ({ description }) => {
  return (
    <article className="pl-4 mb-4" style={{ maxWidth: '356px' }}>
      <h2 className="text-indigo-900  text-2xl mb-2">Description</h2>
      <p className="text-gray-400">{description}</p>
    </article>
  );
};

export default MovieDescription;
