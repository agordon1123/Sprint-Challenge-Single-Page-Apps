import React from 'react';

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

export default function EpisodeCard ({ ep }) {
    return (
        <StyledDiv>
            <h3>{ep.name}</h3>
            <p>{ep.episode}</p>
            <p>{ep.air_date}</p>
        </StyledDiv>
    )
}