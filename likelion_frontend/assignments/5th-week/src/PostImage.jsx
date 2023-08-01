import React from 'react';
import styled from 'styled-components'

const StyledPostImageContainer=styled.div`
    border-radius:2rem;
    overflow: hidden;
    height:100%;
    width: 60%;
    box-sizing:content-box;
`

const imgStyle = {
    width:'100%',
    height:'100%',
    objectFit:'cover'
}

const PostImage = () => {
    return (
        <StyledPostImageContainer>
            <img src='https://velog.velcdn.com/images/heelieben/post/87bbb462-dbd5-49a5-a9e9-70ed2007cdaf/image.png'
            style={imgStyle}/>
        </StyledPostImageContainer>
    );
};


export default PostImage;