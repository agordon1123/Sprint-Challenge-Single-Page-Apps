import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacter = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        // console.log('response.data.results: ', response.data.results)
        // console.log('response.data: ', response.data)
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log('Server Error', error)
      })
    }
    getCharacter();
  }, [])

  return (
    <section className='character-list grid-view'>
      {character.map(char => (
        <CharacterCard key={char.id} char={char} />
      ))}
    </section>
  )
}
