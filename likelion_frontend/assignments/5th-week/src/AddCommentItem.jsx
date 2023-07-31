import React from 'react';
import styled from 'styled-components'

const StyledAddCommentItem = styled.form`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center
`
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

const StyledInputText = styled.input.attrs({type:'text', placeholder:'댓글을 입력하세요'})`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: #EAEAEA;
`



const AddCommentItem = () => {

    return (

        <StyledAddCommentItem>
            <StyledInputText/>
            <StyledButton>+</StyledButton>
        </StyledAddCommentItem>
    );
};

export default AddCommentItem;