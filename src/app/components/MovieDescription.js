import React from "react";

const MovieDescription = ({ description }) => {
  
  const truncatedDescription = description.length > 200 ? description.substring(0, 200) + "..." : description;

  return (
    <article className="pl-5 mb-6 mt-6" style={{ maxWidth: '356px' }}>
      <h2 className="text-indigo-900  text-2xl mb-2">Description</h2>
      <p className="text-gray-400">{truncatedDescription}</p>
    </article>
  );
};

export default MovieDescription;
