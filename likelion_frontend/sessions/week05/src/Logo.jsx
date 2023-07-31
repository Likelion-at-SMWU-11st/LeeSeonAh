import React from 'react';
import styled from 'styled-components'

// 스타일 컴포넌트 생성
const StyledLogo = styled.p`
    padding:10px 10px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin: 5px;
    color: orange;
    background-color: black;
`

const Logo = () => {
    return (
        // 스타일 컴포넌트 적용
        <StyledLogo>🦁LIKELION UNIV. COMMUNITY🦁</StyledLogo>
    );
};

export default Logo;