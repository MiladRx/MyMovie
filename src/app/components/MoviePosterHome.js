import React from 'react';

function MoviePosterHome({ title, rating, imageUrl }) {
    return (
        <div className="ml-1 mt-1 movie-poster-home" style={{ marginRight: '0px' }}> 
            <img
                src={imageUrl}
                alt={title}
                style={{
                    marginBottom: '10px',
                    height: '210px',
                    minWidth: '150px', 
                    borderRadius: '10px',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)'
                }}
            />  
            <div style={{ marginLeft: '2px', maxWidth: '150px' }}> 
                <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
}

export default MoviePosterHome;
