import React from 'react';
import styled from 'styled-components';

const StyeldTitle=styled.div`
    padding: 30px 10px 0px 10px;
    margin: 20px auto;
    width: 60vw;
    font-size: 25px;
    font-weight: bold;
    text-align: left;
    color:white;
`;


const Title = () => {
    return (
        <StyeldTitle>📝 선아의 게시판</StyeldTitle>
    );
};



export default Title;