import React from 'react'

import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    width: 75%;
    margin: 10px auto;
    border: 1px solid red;
    border-radius: 5px;
`;

export default function LocationCard ({ loc }) {
  return (
    <StyledDiv>
      <h3>{loc.name}</h3>
      <p>{loc.dimension}</p>
      <p>{loc.type}</p>
    </StyledDiv>
  )
}
