import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [episode, setEpisode] = useState([])

    useEffect(() => {
        const getEpisode = () => {
            axios.get('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                console.log('response.data.results: ', response.data.results)
                setEpisode(response.data.results)
            })
            .catch(error => {
                console.log('Server Error', error)
            })
        }
        getEpisode();
    }, [])

    return (
        <section className='episode-list grid-view'>
            {episode.map(ep => (
                <EpisodeCard key={ep.id} ep={ep} />
            ))}
        </section>
    )
}
