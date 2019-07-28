import React from 'react'

import { StyledDiv, StyledPar, StyledHHH, StyledEpPar, StyledSpan } from './Styles';

// import styled from 'styled-components';

// const StyledDiv = styled.div`
//   height: 100px;
//   width: 45%;
//   margin: 10px auto;
//   border: 1px solid black;
//   border-radius: 5px;
// `;

export default function LocationCard ({ loc }) {
  return (
    <StyledDiv>
      <StyledHHH>{loc.name}</StyledHHH>
      <StyledEpPar>{loc.dimension}</StyledEpPar>

      <StyledSpan>
        <StyledPar>{loc.type}</StyledPar>
      </StyledSpan>
    </StyledDiv>
  )
}
