import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const getCharacter = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
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
