// MovieDetails.js
import React from "react";

const MovieDetails = ({ title, rating, genres, length, language }) => {
    return (
        <section className="pl-4 pt-4">
            <h1 className="font-bold mb-2 text-4xl break-words">{title}</h1>

            <div className="rating mb-5">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>

            <br />

            <div className="badges space-x-2 mb-5">
                <div className="badge badge-outline">Action</div>
                <div className="badge badge-outline">Adventure</div>
                <div className="badge badge-outline">Fantasy</div>
            </div>

            <section class="flex flex-wrap">
                <div class="flex-1 mr-4 mb-4">
                    <h2 class="text-gray-600 text-lg">Length</h2>
                    <p class="text-sm font-semibold">{length}</p>
                </div>

                <div class="flex-1 mr-4 mb-4">
                    <h2 class="text-gray-600 text-lg">Language</h2>
                    <p class="text-sm font-semibold">{language}</p>
                </div>

                <div class=" flex-1 mb-4">
                    <h2 class="text-gray-600 text-lg">Rating</h2>
                    <p class="text-sm font-semibold">{rating}</p>
                </div>
            </section>
        </section>
    );
};

export default MovieDetails;
