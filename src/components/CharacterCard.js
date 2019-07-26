import React from 'react'

export default function CharacterCard ({ char }) {
  return (
    <div>
      <img src={char.image} alt={char.name} />
      <h3>{char.name}</h3>
      <p>{char.species}</p>
      <p>{char.status}</p>
      <p>{char.location.name}</p>
      <p>{char.origin.name}</p>
    </div>
  )
}
