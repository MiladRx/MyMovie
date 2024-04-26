import React, { useState } from 'react';
import Link from 'next/link';

const MovieSearchInput = ({ movies, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
      
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredMovies);
      
        onSearch(value);
    };

    return (
        <div className="relative">
            <input
                className="bg-white-900 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:blue-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-white-400"
                autoComplete="off"
                placeholder="søg efter film..."
                name="text"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
            />
          
            {searchResults.length > 0 && searchTerm !== '' && (
                <div className="absolute z-10 bg-white w-full shadow-lg mt-1 rounded-md">
                    {searchResults.map((movie, index) => (
                        <Link key={index} href={`/details/${movie.id}`} passHref>
                            <p className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
                                {movie.title}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieSearchInput;
