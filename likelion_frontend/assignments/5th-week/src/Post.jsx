import React from 'react';
import styled from 'styled-components'
import PostImage from './PostImage';
import PostTexts from './PostTexts'

const StyledPost = styled.div`
    margin: 0 auto;
    width:60vw;
    padding: 30px;
    border-radius: 3rem;
    height: 70vh;
    display: flex;
    flex-direction: row;
    box-sizing:content-box;
    color: white;

`

const Post = () => {
    return (
        <StyledPost>
            <PostImage/>
            <PostTexts/>
        </StyledPost>
    );
};

export default Post;