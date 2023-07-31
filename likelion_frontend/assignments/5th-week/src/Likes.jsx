import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';

const StyledLikes=styled.div `
    display:flex;
    flex-direction:row;
    align-items: center;
    font-weight: bold;
`


const Likes = () => {

    const style={
        display:"flex",
        flexDirection: "row"
    }

    var likeCount=0

    return (
        <StyledLikes>
            <div>{likeCount}</div>
            <LikeButton/>
        </StyledLikes>
    );
};

export default Likes;