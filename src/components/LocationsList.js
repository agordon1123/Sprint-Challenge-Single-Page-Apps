import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
    const [location, setLocation] = useState([])

    useEffect(() => {
      const getLocation = () => {
         Axios.get('https://rickandmortyapi.com/api/location/')
          .then(response => {
              setLocation(response.data.results)
          })
          .catch(error => {
              console.log('Server Error', error)
          })    
        }
        getLocation();
    }, [])
    return (
        <section className='location-list grid-view'>
            {location.map(loc => (
                <LocationCard key={loc.id} loc={loc} />
            ))}
        </section>
    )
}
