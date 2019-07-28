import React from 'react'

import { CharacterDiv, StyledHHH, CharacterPar, CharacterStatus, CharacterOrigin } from './Styles';

export default function CharacterCard ({ char }) {
  return (
    <CharacterDiv>
      <img src={char.image} alt={char.name} />
      <StyledHHH>{char.name}</StyledHHH>
      <CharacterPar>{char.species}</CharacterPar>
      <CharacterStatus>{char.status}</CharacterStatus>
      <CharacterPar>{char.location.name}</CharacterPar>
      <CharacterOrigin>{char.origin.name}</CharacterOrigin>
    </CharacterDiv>
  )
}
