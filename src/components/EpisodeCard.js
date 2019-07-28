import React from 'react';

import { StyledDiv, StyledPar, StyledHHH, StyledEpPar, StyledSpan } from './Styles';

export default function EpisodeCard ({ ep }) {
    return (
        <StyledDiv>
            <StyledHHH>{ep.name}</StyledHHH>
            <StyledEpPar>{ep.episode}</StyledEpPar>
            <StyledSpan>
                <StyledPar>{ep.air_date}</StyledPar>
            </StyledSpan>
        </StyledDiv>
    )
}