import React from 'react'

export default function LocationCard ({ loc }) {
  return (
    <div>
      <h3>{loc.name}</h3>
      <p>{loc.dimension}</p>
      <p>{loc.type}</p>
    </div>
  )
}
