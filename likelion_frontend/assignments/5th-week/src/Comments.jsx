import React from 'react';
import styled from 'styled-components'
import AddCommentItem from './AddCommentItem'

const StyledComments=styled.div`
    text-align:left;
    box-sizing: content-box;
`


const StyledCommentItem=styled.div`
    padding: 10px 10px 10px 0;
    border-bottom: 1px solid gray;
    box-sizing: content-box;
`

const Comments = () => {
    return (
        <StyledComments>
            <h3>댓글</h3>
            <AddCommentItem/>
            <StyledCommentItem>혜진이가 엄청 혼났던 그 날</StyledCommentItem>
            <StyledCommentItem>지원이가 여친이랑 헤어진 그 날</StyledCommentItem>
            <StyledCommentItem>선아가 세미나 빠졌던 그 날</StyledCommentItem>
        </StyledComments>
    );
};

export default Comments;