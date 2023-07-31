import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    margin: 5px;
    background: white;
    border: transparent;
    box-shadow: -1px -1px 3px gray inset;

    &:hover {
        box-shadow: 1px 1px 3px gray inset;
    }
`

const LikeButton = () => {
    return (
        <StyledButton>👍</StyledButton>

    );
};

export default LikeButton;