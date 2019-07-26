import React from 'react';

export default function EpisodeCard ({ ep }) {
    return (
        <div>
            <h3>{ep.name}</h3>
            <p>{ep.episode}</p>
            <p>{ep.air_date}</p>
        </div>
    )
}