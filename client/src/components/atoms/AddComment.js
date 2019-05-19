import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.form`
    margin-top: 10px;
    font-size: 12px;
`

const LabelWrapper = styled.label`
    display: block;
`

const InputWrapper = styled.textarea`
    width: 500px;
    height: 50px;
    display: block;
`

const AddComment = () => {
    return (
        <div>
            <CommentWrapper>
                <LabelWrapper>Comment</LabelWrapper>
                <InputWrapper placeholder="Enter comment here..."></InputWrapper>
                {/* <InputWrapper type="textarea"/> */}
            </CommentWrapper>
        </div>
    )
}

export default AddComment;