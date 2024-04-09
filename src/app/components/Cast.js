// Cast.js
import React from "react";

const Cast = ({ imageUrl, name }) => {
  return (
    <section className="pl-4">
      <h2 className=" mb-4 text-indigo-900 text-2xl">Cast</h2>
      <div className="flex-col w-20">
        <img className="object-cover w-20 h-20 mb-2 rounded-full shadow" src={imageUrl} alt={name} />
        <div className="flex justify-center">
          <p className="text-lg font-bold">{name}</p>
        </div>
      </div>
    </section>
  );
};

export default Cast;
