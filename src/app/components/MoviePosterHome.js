import React from 'react';
import { IoMdStar } from 'react-icons/io';

function MoviePosterHome({ title, rating, imageUrl }) {
    return (
        <div className="ml-1 mt-1 movie-poster-home" style={{ marginRight: '0px' }}> 
            <img
                src={imageUrl}
                alt={title}
                style={{
                    marginBottom: '0px',
                    height: '210px',
                    minWidth: '150px', 
                    borderRadius: '5px',
                    boxShadow: '0px 12px 10px -4px rgba(0, 0, 0, 0.2)'
                }}
            />  
           <div style={{ marginLeft: '0px', maxWidth: '150px' }}> 
                <h1 style={{ marginTop: '12px' }}>{title}</h1>
                <div style={{marginLeft: '-2px', display: 'flex', alignItems: 'center' }}>
                    <IoMdStar style={{ color: '#FFC319' }} />
                    <p style={{ marginLeft: '5px', marginBottom: '0' }}> {rating.toFixed(1)}/10 IMDb</p>
                </div>
            </div>
        </div>
    );
}

export default MoviePosterHome;
