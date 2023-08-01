import React from 'react';
import styled from 'styled-components';
import Comments from './Comments';
import Likes from './Likes'

const StyledPostTexts=styled.div`
    margin-left: 20px;
    width:40%;
    height: 100%;
    box-sizing:content-box;
`

const StyledContents=styled.div`
    height: 30%;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    padding-bottom:1rem;
`

const PostTexts = () => {

    const authorStyle={
        color:"gray",
        marginBottom:"2rem"
    }

    return (
        <StyledPostTexts>
            <StyledContents>
                <h2>React 익숙해지기 어디까지 왔나요</h2>
                <p style={authorStyle}>작성자</p>
                <section>
                    <p>What's your ETA</p>
                    <p>What's your ETA</p>
                </section>
            </StyledContents>
            <Likes/>
            <Comments/>
        </StyledPostTexts>
    );
};

export default PostTexts;